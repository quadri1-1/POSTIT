import React from "react";
import logo from "../assets/Postit1.png";
import profile from "../assets/profile.png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "../styles/header.css";

const Header = () => {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container className="das">
          <div>
            <Navbar.Brand>
              <Link to="/">
                <img src={logo} alt="" />
                </Link>
              </Navbar.Brand>
          </div>
          <div className="nas">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto yea">
                <Link className="sto" to="/allstories">
                  Stories
                </Link>
                <Link className="sto">Contact</Link>
              </Nav>
              <div>
                <img src={profile} alt="" />
              </div>
            </Navbar.Collapse>
          </div>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
