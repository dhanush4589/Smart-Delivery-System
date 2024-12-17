// src/index.tsx

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// Remove the following two lines if you don't need performance tracking
// import reportWebVitals from './reportWebVitals'; 

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you removed the import, remove or comment out this line too
// reportWebVitals();

