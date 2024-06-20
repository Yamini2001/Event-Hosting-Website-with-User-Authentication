const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 3000;

// Create a connection to the MySQL database
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',  // Use your MySQL username
    password: '',  // Use your MySQL password
    database: 'users' // Replace with your database name
});

// Connect to the database
db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('MySQL connected...');
});

// Define a route to check if the table exists
app.get('/check-database', (req, res) => {
    const sql = 'SHOW TABLES LIKE "table1"';
    db.query(sql, (err, result) => {
        if (err) {
            console.error('Error executing query:', err);
            res.status(500).send('Internal Server Error');
            return;
        }
        if (result.length > 0) {
            res.send('Table exists');
        } else {
            res.send('Table does not exist');
        }
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
