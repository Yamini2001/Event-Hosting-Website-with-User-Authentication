const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'data'
});

db.connect(err => {
  if (err) {
    console.error('Database connection error:', err);
    throw err;
  }
  console.log('Database connected');
});

const secretKey = 'your_secret_key';

app.post('/register', async (req, res) => {
  const { email, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    db.query('INSERT INTO users (email, password) VALUES (?, ?)', [email, hashedPassword], (err, result) => {
      if (err) {
        console.error('Error registering user:', err);
        return res.status(500).send(err);
      }
      console.log('User registered:', email);
      res.status(200).send('User registered');
    });
  } catch (error) {
    console.error('Error hashing password:', error);
    res.status(500).send(error.message);
  }
});

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  db.query('SELECT * FROM users WHERE email = ?', [email], async (err, results) => {
    if (err) {
      console.error('Error retrieving user:', err);
      return res.status(500).send(err);
    }
    if (results.length === 0) return res.status(401).send('Invalid credentials');
    const user = results[0];
    try {
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) return res.status(401).send('Invalid credentials');
      const token = jwt.sign({ id: user.id }, secretKey, { expiresIn: '1h' });
      console.log('User logged in:', email);
      res.status(200).json({ token });
    } catch (error) {
      console.error('Error comparing passwords:', error);
      res.status(500).send(error.message);
    }
  });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
