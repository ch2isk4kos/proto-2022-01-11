import React from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import { Link } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <div className="Navbar">
//       <ul>
//         <li>Home</li>
//         <li>About</li>
//         <li>Contact</li>
//       </ul>
//     </div>
//   );
// };

const Navigation = () => {
  //   const handleSelect = (eventKey) => alert(`selected ${eventKey}`);
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="home">
          <Link to="home">MSJ</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        {/* <Navbar.Collapse id="responsive-navbar-nav"> */}
        {/* <Nav className="me-auto"> */}
        <Nav className="justify-content-end">
          {/* <Nav.Link href="articles">Articles</Nav.Link>
          <Nav.Link href="schedule">Schedule</Nav.Link>
          <Nav.Link href="statistic">Statistics</Nav.Link>
          <Nav.Link href="history">History</Nav.Link>
          <Nav.Link href="store">Store</Nav.Link> */}
          <Nav.Link>
            <Link to="articles">Articles</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="schedule">Schedule</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="statistic">Statistics</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="history">History</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="store">Store</Link>
          </Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link>
            <Link to="about">About</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="contact">Contact</Link>
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
  );
};

export default Navigation;
