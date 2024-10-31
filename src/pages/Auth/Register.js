import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const navigate = useNavigate();

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

      console.log('Registration Response:', response.data);

      setSuccess('User registered successfully!');
      navigate('/login');

      setEmail('');
      setPassword('');
      setRePassword('');
      setFirstName('');
      setLastName('');
    } catch (err) {
      if (err.response && err.response.data) {
        setError(err.response.data.detail || 'Registration failed');
      } else {
        setError('An error occurred: ' + err.message);
      }
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2 className="text-center mb-4">User Registration</h2>
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
            <div className="mb-3">
              <label className="form-label">Confirm Password</label>
              <input
                type="password"
                className="form-control"
                value={rePassword}
                onChange={(e) => setRePassword(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">First Name</label>
              <input
                type="text"
                className="form-control"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Last Name</label>
              <input
                type="text"
                className="form-control"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">Register</button>
          </form>
          {error && <div className="alert alert-danger mt-3 text-center">{error}</div>}
          {success && <div className="alert alert-success mt-3 text-center">{success}</div>}
        </div>
      </div>
    </div>
  );
};

export default Register;
