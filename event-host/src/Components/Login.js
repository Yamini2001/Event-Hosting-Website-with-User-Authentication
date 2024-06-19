import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import "./Login.css";

const Login = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const auth = useAuth();

  const handleSubmitEvent = async (e) => {
    e.preventDefault();
    if (input.email !== "" && input.password !== "") {
      try {
        await auth.loginAction(input);
      } catch (err) {
        setError(err.message);
      }
    } else {
      setError("Please provide a valid input");
    }
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        {error && <div className="error">{error}</div>}
        <form onSubmit={handleSubmitEvent}>
          <div className="form-control">
            <label htmlFor="user-email">Email:</label>
            <input
              type="email"
              id="user-email"
              name="email"
              placeholder="example@yahoo.com"
              onChange={handleInput}
            />
          </div>
          <div className="form-control">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={handleInput}
            />
          </div>
          <button className="btn-submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
