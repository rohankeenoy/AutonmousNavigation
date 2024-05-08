import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 

import Home from './containers/Home';

const App = () => {


  return (
    <Router>
      
      <Routes>
        <Route path="/auto-car" element={<Home />} />
      
      </Routes>
    </Router>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);