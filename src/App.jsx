// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from '../src/Pages/Landing'; // Asegúrate de tener este componente
import Marquesitas from './Pages/Marquesitas';
import ViewFeedback from './Pages/ViewFeedback';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/marquesitas" element={<Marquesitas/>} />
        <Route path="/marquesitas-feedback" element={<ViewFeedback />} />
      </Routes>
    </Router>
  );
};

export default App;