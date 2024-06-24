import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { login } = useAuth();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError(null);
        setLoading(true);

        const payload = { email, password };

        try {
            const response = await fetch('http://localhost:5000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });

            console.log('Response status:', response.status);

            if (response.ok) {
                const data = await response.json();
                console.log('Login successful', data);
                login(data);
                navigate('/home');
            } else {
                const errorData = await response.json();
                console.log('Login failed', errorData);
                setError(errorData.message || 'Login failed');
            }
        } catch (err) {
            console.error('An error occurred', err);
            setError('An error occurred');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="login-container">
            <form onSubmit={handleLogin}>
                <h2>Login</h2>
                <div className="input-group">
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="input-group">
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" disabled={loading}>Login</button>
            </form>
            {error && <div className="error-message">{error}</div>}
        </div>
    );
};

export default Login;
