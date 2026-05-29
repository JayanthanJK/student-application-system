import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "../styles/AdminLogin.css";

function AdminLogin() {

  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {

    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });

  };

  const handleLogin = (e) => {

    e.preventDefault();

    if (
      loginData.username === "admin"
      &&
      loginData.password === "admin123"
    ) {

      localStorage.setItem(
        "adminLoggedIn",
        "true"
      );

      navigate("/admin-dashboard");

    } else {

      alert("Invalid Username or Password");

    }

  };

  return (

    <div className="login-container">

      <div className="login-card">

        <h1>Admin Login</h1>

        <form onSubmit={handleLogin}>

          <input
            type="text"
            name="username"
            placeholder="Username"
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            required
          />

          <button type="submit">
            Login
          </button>

        </form>

      </div>

    </div>

  );

}

export default AdminLogin;