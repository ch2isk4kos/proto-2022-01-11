import React from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import { Link } from "react-router-dom";

const Navigation = () => {
  //   const handleSelect = (eventKey) => alert(`selected ${eventKey}`);
  return (
    // <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <div className="Navbar">
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Brand href="home">
            <Link to="home">LOGO</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          {/* <Navbar.Collapse id="responsive-navbar-nav"> */}
          {/* <Nav className="me-auto"> */}
          <Nav className="justify-content-end">
            <Nav.Link>
              <Link to="articles">Articles</Link>
            </Nav.Link>
            <Nav.Link>
              {/* <Link to="schedule">Schedule</Link> */}
              <Link to="podcast">Podcast</Link>
            </Nav.Link>
            <Nav.Link>
              {/* <Link to="statistics">Statistics</Link> */}
              <Link to="statistics">Events</Link>
            </Nav.Link>
            <Nav.Link>
              {/* <Link to="history">History</Link> */}
              <Link to="history">History</Link>
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link>
              <Link to="store">Store</Link>
            </Nav.Link>
            <Nav.Link eventKey={2}>
              <Link to="signin">Sign In</Link>
            </Nav.Link>
            {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          {/* </Navbar.Collapse> */}
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
