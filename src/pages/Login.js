import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const UserLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    const data = {
      email,
      password,
    };

    try {
      const response = await axios.post('http://127.0.0.1:8000/auth/jwt/create/', data, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      // Log the response for debugging
      console.log('Login Response:', response.data);

      // Store the token (optional)
      localStorage.setItem('token', response.data.access);

      setSuccess('Login successful! Redirecting...');
      
      // Redirect to /profile
      navigate('/profile'); // Redirect to profile route
    } catch (err) {
      // Handle errors
      if (err.response && err.response.data) {
        setError(err.response.data.detail || 'Login failed');
      } else {
        setError('An error occurred: ' + err.message);
      }
    }
  };

  return (
    <div>
      <h2>User Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}
    </div>
  );
};

export default UserLogin;
