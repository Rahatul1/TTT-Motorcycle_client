import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";

const Header = () => {
  const [user] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth);
  };
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="home">TTT Motorcycle</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/home#banner">Home</Nav.Link>
              <Nav.Link href="/home#inventoris">Inventoris</Nav.Link>
            </Nav>
            <Nav>
              {user && (
                <>
                  <Nav.Link as={Link} to="addItem">
                    Add Item
                  </Nav.Link>
                  <Nav.Link as={Link} to="manageItem">
                    Manage Items
                  </Nav.Link>
                  <Nav.Link as={Link} to="myItem">
                    My items
                  </Nav.Link>
                </>
              )}
              <Nav.Link as={Link} to="/blogs">
                Blogs
              </Nav.Link>
              {user ? (
                ""
              ) : (
                <Nav.Link as={Link} to="register">
                  Sign Up
                </Nav.Link>
              )}
              {user ? (
                <button
                  className="btn btn-link text-white text-decoration-none"
                  onClick={handleSignOut}
                >
                  sign out
                </button>
              ) : (
                <Nav.Link as={Link} to="login">
                  Login
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
