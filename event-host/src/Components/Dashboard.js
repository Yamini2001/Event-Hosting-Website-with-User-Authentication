import React from "react";
import { useAuth } from "../context/AuthContext";

const Dashboard = () => {
  const auth = useAuth();

  return (
    <div className="container">
      <h1>Welcome, {auth.user?.username}!</h1>
      <button onClick={auth.logOut} className="btn-submit">
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
