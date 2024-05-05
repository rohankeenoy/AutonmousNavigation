import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 

import Home from './containers/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes> {/* Wrap your routes with Routes */}
        <Route path="/" element={<Home />} /> 
        
      </Routes>
    </Router>
  </React.StrictMode>
);
