import React from 'react';
import './App.css';
import AuthenticatedPage from './components/pages/AuthenticatedPage';
import NotAuthenticatedPage from './components/pages/NotAuthenticatedPage';

const isAuhtenticated = false;

function App() {
  return (
    isAuhtenticated ? <AuthenticatedPage /> : <NotAuthenticatedPage />
  );
}

export default App;
