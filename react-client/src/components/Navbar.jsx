import React from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

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
        <Navbar.Brand href="#home">MSJ</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        {/* <Navbar.Collapse id="responsive-navbar-nav"> */}
        {/* <Nav className="me-auto"> */}
        <Nav className="justify-content-end">
          <Nav.Link href="#articles">Articles</Nav.Link>
          <Nav.Link href="#schedule">Schedule</Nav.Link>
          <Nav.Link href="#statistics">Statistics</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="#shop">Store</Nav.Link>
          <Nav.Link eventKey={2} href="#Sign In">
            Sign In
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
