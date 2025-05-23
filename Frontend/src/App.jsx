import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import CodeReview from './CodeReview';
import GenerateCode from './GenerateCode'
import LoginPage from './LoginPage';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<LandingPage />} />
          <Route path="/review-code" element={<CodeReview />} />
          <Route path="/generate-code" element={<GenerateCode />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;