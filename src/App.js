// frontend/src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import ProfileTable from './pages/Profile/ProfileTable';
import CandleImagesTable from './pages/CandlesImages/CandelsImagesTable';
import TradeDetailsTable from './pages/TradeDetails/TradeDetailsTable';
import TradingIndicatorsTable from './pages/TradingIndicators/TradingIndicatorsTable';
import MgiCandles from './pages/MgiCandles/MgiCandles';
import Home from './pages/Home/Home';
import Header from './components/Header';
import About from './pages/Home/About';
import Services from './pages/Home/Services';


function App() {
  return (
    <Router>
    <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/profile" element={<ProfileTable />} />
        <Route path="/candleimages" element={<CandleImagesTable />} />
        <Route path="/tradedetails" element={<TradeDetailsTable />} />
        <Route path="/tradingindicators" element={<TradingIndicatorsTable />} />
        <Route path="/mgicandles" element={<MgiCandles />} />
      </Routes>
    </Router>
  );
}

export default App;
