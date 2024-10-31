import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const UserLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  
  const navigate = useNavigate();

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

      console.log('Login Response:', response.data);
      localStorage.setItem('token', response.data.access);

      setSuccess('Login successful! Redirecting...');
      navigate('/mgicandles');
    } catch (err) {
      if (err.response && err.response.data) {
        setError(err.response.data.detail || 'Login failed');
      } else {
        setError('An error occurred: ' + err.message);
      }
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2 className="text-center mb-4">User Login</h2>
          <form onSubmit={handleSubmit} className="p-4 border rounded shadow-sm bg-light">
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">Login</button>
          </form>
          {error && <div className="alert alert-danger mt-3 text-center">{error}</div>}
          {success && <div className="alert alert-success mt-3 text-center">{success}</div>}
        </div>
      </div>
    </div>
  );
};

export default UserLogin;
