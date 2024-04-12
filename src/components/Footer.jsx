import React from "react";
import "../styles/footer.css";
import abt from "../assets/about.png"
import social from "../assets/socials.png"

const Footer = () => {
  return (
    <div className="background">
    <div className="back">
      <div className="about">
        <img src={abt} alt="" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt id
          sem vel quis in turpis sit eget pellentesque. Nunc etiicies in
          rhoncus, rhoncus in arcu. Tincidunt neque fusce vitaenisi aliquet. que
          maeae tortoere necsem commodo ac.
        </p>
          </div>
          <div className="quick">
              <h2>Quick Menu</h2>
              <div className="list">
                  <ul>
                  <li>Home</li>
                  <li>Stories</li>
                  <li>Trending Stories</li>
                  <li>Popular Stories</li>
              </ul>
               <ul>
                  <li>Sign Up</li>
                  <li>Log In</li>
                  <li>Contact Us</li>
              </ul>
              </div>
          </div>
          <div className="news">
              <h2>Subscribe to our newsletter</h2>
              <div className="button">
                  <form>
                      <input className="form" type="email" placeholder="Email adress"/>
                  </form>
                  <button>Subscribe</button>
              </div>
      </div>
          </div>
          <hr className="hr" />
       <div className="term">
              <p>Terms and policy</p>
              <div >
              <img src={social} alt="" />
              </div>
              
          </div>
      </div>
  );
};

export default Footer;
