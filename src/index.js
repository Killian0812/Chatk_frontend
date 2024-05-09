import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

import { AuthProvider } from './context/AuthProvider';
import { CallStatusProvider } from './context/CallStatusProvider';
import { ErrorBoundary } from "react-error-boundary";
import Loading from './components/Loading';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  // <React.StrictMode>
  <ErrorBoundary FallbackComponent={<Loading />}>
    <AuthProvider>

      <CallStatusProvider>

        <BrowserRouter>
          <App />
        </BrowserRouter>

      </CallStatusProvider>

    </AuthProvider>
  </ErrorBoundary>
  // </React.StrictMode >
);


