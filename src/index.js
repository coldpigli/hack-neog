import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { ColorContrastProvider } from 'context/colorContrastContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <ColorContrastProvider>
        <App />
      </ColorContrastProvider>

    </Router>
  </React.StrictMode>
);

