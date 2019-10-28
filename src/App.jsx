import React from 'react';
import AuthenticatedPage from './components/pages/AuthenticatedPage';
import NotAuthenticatedPage from './components/pages/NotAuthenticatedPage';
import { useSelector } from 'react-redux';

function App() {

  const isAuhtenticated = useSelector(state => state.isAuhtenticated);

  return (
    isAuhtenticated ? <AuthenticatedPage /> : <NotAuthenticatedPage />
  );
}

export default App;
