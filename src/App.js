// frontend/src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/Login';
import ProfilePage from './pages/ProfilePage';
import MgiCandlesPage from './pages/MgiCandlesPage';
import Register from './pages/Register';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/mgicandles" element={<MgiCandlesPage />} />
      </Routes>
    </Router>
  );
}

export default App;
