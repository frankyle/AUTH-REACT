// frontend/src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/Login';
import Register from './pages/Register';
// import MgiStrategy from './pages/MgiCandles/MgiStategy';
import ProfileTable from './pages/Profile/ProfileTable';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<ProfileTable />} />
        {/* <Route path="/mgicandles" element={<MgiStrategy />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
