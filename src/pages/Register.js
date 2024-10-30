import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (password !== rePassword) {
      setError('Passwords do not match');
      return;
    }

    const data = {
      email,
      password,
      re_password: rePassword,
      first_name: firstName,
      last_name: lastName,
    };

    try {
      const response = await axios.post('http://localhost:8000/auth/users/', data, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

       // Log the response for debugging
      console.log('Registration Response:', response.data);

      setSuccess('User registered successfully!');      
      // Redirect to Login
      navigate('/login'); 

      // Optionally reset form fields
      setEmail('');
      setPassword('');
      setRePassword('');
      setFirstName('');
      setLastName('');
    } catch (err) {
      // Handle errors
      if (err.response && err.response.data) {
        setError(err.response.data.detail || 'Registration failed');
      } else {
        setError('An error occurred: ' + err.message);
      }
    }
  };

  return (
    <div>
      <h2>User Registration</h2>
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
        <div>
          <label>Confirm Password:</label>
          <input
            type="password"
            value={rePassword}
            onChange={(e) => setRePassword(e.target.value)}
            required
          />
        </div>
        <div>
          <label>First Name:</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Last Name:</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
        <button type="submit">Register</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}
    </div>
  );
};

export default Register;
