import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../assets/Postit1.png";
import { Link } from "react-router-dom";
import "../styles/header.css"

const Navbars = () => {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container className="das">
          <div>
            <Navbar.Brand>
              <Link>
                <img src={logo} alt="" />
              </Link>
            </Navbar.Brand>
          </div>
          <div className="nas">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto yea">
                <Link to="/allstories" className="sto">Stories</Link>
                <Link className="sto">Contact</Link>
                <Link className="sto" to="/login">Sign In</Link>
                <Link className="stoi" to="/register"><button>Get started</button></Link>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navbars;
