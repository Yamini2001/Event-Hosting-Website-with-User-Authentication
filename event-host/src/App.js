import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import './App.css';

function App() {
  const isAuthenticated = () => {
    return !!localStorage.getItem('token');
  };

  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/dashboard"
            element={isAuthenticated() ? <Dashboard /> : <Navigate to="/login" />}
          />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
