import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ user, children }) => {
  if (!user.success) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;
