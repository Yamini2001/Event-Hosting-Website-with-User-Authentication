import React from 'react';
import { BrowserRouter as Router, Routes, Route,Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext'; // Adjust path as necessary
import Login from './Components/Login'; // Adjust path as necessary
// import Navbar from './Components/Navbar';
import Home from './Components/Home';
// import Dashboard from './Components/Dashboard'; // Adjust path as necessary

function App() {
  return (
    <AuthProvider>
      <Router>
        {/* <Navbar/> */}
        <Routes>
        <Route path="/login" element={<Login />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="*" element={<Navigate to="/home" />} />
          {/* Other routes */}
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
