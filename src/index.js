import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

import { AuthProvider } from './context/AuthProvider';
import { CallStatusProvider } from './context/CallStatusProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <AuthProvider>

      <CallStatusProvider>

        <BrowserRouter>
          <App />
        </BrowserRouter>

      </CallStatusProvider>

    </AuthProvider>
  </React.StrictMode>
);


