// frontend/src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/Login';
import Register from './pages/Register';
import ProfileTable from './pages/Profile/ProfileTable';
import CandleImagesTable from './pages/CandlesImages/CandelsImagesTable';
import TradeDetailsTable from './pages/TradeDetails/TradeDetailsTable';
import TradingIndicatorsTable from './pages/TradingIndicators/TradingIndicatorsTable';
import MgiCandles from './pages/MgiCandles/MgiCandles';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<LoginPage />} />
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
