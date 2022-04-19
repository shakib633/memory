import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
import "./Header.css";

const Header = () => {
  const [user]=useAuthState(auth);
   const handleSignOut=()=>{
          signOut(auth) 
   }
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="light"
        sticky="top"
        variant="light"
      >
        <Container>
          <Navbar.Brand as={Link} to="/">
            <h3>M E M O R Y</h3>
            <p>
              <small className="text-danger">Kept Your sweet Moments</small>
            </p>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="text-primary fw-bold" href="About">
                About
              </Nav.Link>
              <Nav.Link className="text-primary fw-bold" href="blogs">
                Blogs
              </Nav.Link>
              <Nav.Link className="text-primary fw-bold" href="Home#packages">
                packages
              </Nav.Link>
            </Nav>
            <Nav>
            {
              user?
              <button  className="fw-bold rounded-pill bg-primary  text-white  border" onClick={handleSignOut}>LogOut</button>
              :
                <Nav.Link
                className="text-primary fw-bold"
               as={Link} to="login"
              >
                Login
              </Nav.Link>
            }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
