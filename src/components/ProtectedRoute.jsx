import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { MbtiContext } from '../context/MbtiContext';

const ProtectedRoute = ({ children }) => {
  const { user, setUser } = useContext(MbtiContext);

  if (!user) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;
