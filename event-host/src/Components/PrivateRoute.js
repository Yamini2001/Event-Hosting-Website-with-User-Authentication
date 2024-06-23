// PrivateRoute.js
import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; // Adjust the path as necessary

const PrivateRoute = ({ element, ...rest }) => {
  const { isAuthenticated } = useAuth(); // Ensure useAuth provides isAuthenticated

  return (
    <Route
      {...rest}
      element={isAuthenticated ? element : <Navigate to="/login" />}
    />
  );
};

export default PrivateRoute;
