import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";
import axios from "axios";
import { useEffect } from "react";
import "../styles/wellcome.css";
import Header from "../components/Header";
import wel from "../assets/welcomepic.png"
import Footer from "../components/Footer";

const Welcome = () => {
  const { baseURL } = useGlobalContext();
  const [user, setUser] = useState("");
  const token = localStorage.getItem("token");
  const getUser = async () => {
    const { data } = await axios(`${baseURL}/user`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setUser(data.username);
  };
  useEffect(() => {
    getUser();
  }, []);
  return (
    <div>
      <Header />
      <div className="d-flex justify-content-between container yes">
      <div>
        <div>
          <h3 className="well">Welcome {user}, </h3>
          <p className="del">
            Lorem ipsum dolor sit ameetur adipiscing elit. Coctetur egestas
            massa velit aliquam. Molestim bibendum hnt ipsum orci, platea
            aliquam id ut.{" "}
          </p>
        </div>
        <Link to="/mystories">
          <button className="butn">MY STORIES</button>
        </Link>
        <Link to="/allstories">
          <button className="butns">GO TO FEED</button>
        </Link>
        </div>
        <div>
          <img className="img" src={wel} alt="" />
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Welcome;
