import React from 'react';
import ReactDOM from 'react-dom/client'; // React 18 and onwards uses 'react-dom/client'
import App from './App'; // Path to your App.js file
import './index.css'; // Path to your global styles, if any

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
