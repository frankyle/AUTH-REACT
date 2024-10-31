import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  // Check for token in localStorage on component mount
  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    navigate('/');
  };

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
      <div className="container">
        <Link to="/" className="navbar-brand fw-bold">
          <span style={{ color: '#ffc107' }}>MGI</span> CANDLES
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">About</Link>
            </li>
            <li className="nav-item">
              <Link to="/services" className="nav-link">Services</Link>
            </li>
            <li className="nav-item">
              <Link to="/mgicandles" className="nav-link">Signals</Link>
            </li>
            {!isLoggedIn ? (
              <>
                <li className="nav-item">
                  <Link to="/register" className="nav-link btn btn-outline-warning ms-2">Register</Link>
                </li>
                <li className="nav-item">
                  <Link to="/login" className="nav-link btn btn-warning ms-2 text-white">Login</Link>
                </li>
              </>
            ) : (
              <li className="nav-item" style={{ position: 'relative' }}>
                <span
                  onClick={toggleDropdown}
                  className="nav-link"
                  style={{ cursor: 'pointer' }}
                >
                  Hello
                </span>
                {dropdownOpen && (
                  <div
                    style={{
                      position: 'absolute',
                      right: 0,
                      top: '100%',
                      backgroundColor: 'white',
                      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                      borderRadius: '4px',
                      overflow: 'hidden',
                    }}
                  >
                    <Link to="/profile" className="dropdown-item" style={dropdownItemStyle}>
                      View Profile
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="dropdown-item"
                      style={dropdownItemStyle}
                    >
                      Logout
                    </button>
                  </div>
                )}
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

// Styles for dropdown items
const dropdownItemStyle = {
  padding: '8px 16px',
  color: 'black',
  textDecoration: 'none',
  display: 'block',
  width: '100%',
  backgroundColor: 'white',
  border: 'none',
  textAlign: 'left',
  cursor: 'pointer',
};

export default Header;
