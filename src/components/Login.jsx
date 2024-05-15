import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../login.css'; // Importing the CSS file for styling
import { userDetails } from '../users';
export default function Login({ onLogin }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = userDetails.find(u => u.username === username && u.password === password);
        if (user) {
            alert('Login successful');
            onLogin(username);
            navigate('/book');
        } else {
            alert('Login failed. Please check your username and password.');
            setUsername('');
            setPassword('');
        }
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Username</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type='submit' className="btn">Login</button>
            </form>
            <p>Don't have an account? <a href='/register'>Register</a></p>
        </div>
    );
}
