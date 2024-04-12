import React from "react";
import { useState } from "react";
import axios from "axios";
import { useGlobalContext } from "../context";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "../styles/login.css"

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { baseURL } = useGlobalContext();
  const redirect = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    const { data } = await axios.post(`${baseURL}/login`, {
      email,
      password,
    });
    if (data.success) {
      // store token inside localstorage
      localStorage.setItem("token", data.token);
      // redirect welcome
      redirect("/welcome");
    } else {
    }
  };
  return (
    <div id="hes">
    <div className="d-flex justify-content-center flex-column align-items-center" id="he">
      <h2>Welcome Back</h2>
      <form onSubmit={handleLogin}>
        <div className="mail">
          <label htmlFor="email">Your email address</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <hr />
        </div>
        <div className="mail">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <hr />
        </div>
        <button className="but" type="submit">{loading ? `Logging in .. ` : "Continue"}</button>
        </form>
        <p className="sign">No account? <Link className="wow" to="/register">Sign up</Link></p>
      </div>
      </div>
  );
};

export default Login;
