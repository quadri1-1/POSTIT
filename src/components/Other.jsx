import React from "react";
import "../styles/other.css";
import life from "../assets/life.png";
import nature from "../assets/nature.png";
import tech from "../assets/tech.png";
import trys from "../assets/try.png"

const Other = () => {
  return (
    <div>
      <div className="container">
        <div className="d-flex" id="fast">
          <div className="demo">
            <img src={life} alt="" />
            <div>
              <h6 className="lifes">Lifestyle</h6>
              <p>The 20 Biggest Fashion Companies In Nigeria 2022</p>
            </div>
          </div>
          <div className="demo">
            <img src={nature} alt="" />
            <div>
              <h6 className="nats">Nature</h6>
              <p>The 20 Biggest Agro Companies In Nigeria 2022</p>
            </div>
          </div>
          <div className="demo">
            <img src={tech} alt="" />
            <div>
              <h6 className="techs">Technology</h6>
              <p>The 20 Biggest Fintech Companies In Nigeria 2022</p>
            </div>
          </div>
        </div>
        <div className="saw">
          <img src={trys} alt="" />
          <p>Do you want to write or discover stories from writers on any topic?</p>
          <div className="dass">
            <form className="mat">
              <input type="email" placeholder="Enter email address" />
              <button>Get started</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Other;
