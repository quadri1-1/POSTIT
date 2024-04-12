import React from "react";
import { useState } from "react";
import axios from "axios";
import { useGlobalContext } from "../context";
import { useNavigate } from "react-router-dom";
import '../styles/login.css'
import join from "../assets/joinPostit.png"
import { Link } from "react-router-dom";

const Register = () => {
  const { baseURL } = useGlobalContext();
  const redirect = useNavigate();

  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleRegister = async (e) => {
    e.preventDefault();
    console.log(email, username, password);
    const { data } = await axios.post(`${baseURL}/register`, {
      email,
      username,
      password,
    });
    console.log(data);
    if (data.success) {
      //take you to login
      redirect("/login");
    } else {
      console.log(data);
    }
  };
  return (
    <div id="hes">
    <div className="d-flex justify-content-center flex-column align-items-center" id="he">
        <img src={join} alt="" />
        <p className="tes">Enter your email address to create an account on Post <span className="it">it</span>.</p>
        <form onSubmit={handleRegister}>
        <div className="mail">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
            />
            <hr />
        </div>
        <div className="mail">
          <label htmlFor="email">Email</label>
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
        <button className="but" type="submit">Continue</button>
      </form>
      <p className="sign">Already have an account <Link className="wow" to="/login">Sign in</Link></p>
      </div>
      </div>
  );
};

export default Register;
