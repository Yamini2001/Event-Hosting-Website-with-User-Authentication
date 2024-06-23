// App.js or index.js (where you initialize your React app)

import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import App from './App';

// Set base URL for Axios
axios.defaults.baseURL = 'https://localhost:5000';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
