import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

import Offcanvas from "react-bootstrap/Offcanvas";

const Footer = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="Footer">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          {/* <Nav className="justify-content-center">
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
          </Nav> */}

          {/* LEFT COLUMN */}
          <Nav className="justify-content-start flex-column" activeKey="/home">
            <Nav.Item>
              <Nav.Link>
                <Link to="about">About</Link>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>
                <Link to="contact">Contact</Link>
              </Nav.Link>
            </Nav.Item>
            {/* <Nav.Item>
              <Nav.Link eventKey="link-1">Link</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-2">Link</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="disabled" disabled>
                Disabled
              </Nav.Link>
            </Nav.Item> */}
          </Nav>

          {/* MIDDLE COLUMN */}
          <Nav className="justify-content-center" activeKey="/home">
            <Button variant="primary" onClick={handleShow}>
              More Info
            </Button>

            <Offcanvas placement={"bottom"} show={show} onHide={handleClose}>
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>Offcanvas</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                Some text as placeholder. In real life you can have the elements
                you have chosen. Like, text, images, lists, etc.
              </Offcanvas.Body>
            </Offcanvas>
          </Nav>

          {/* RIGHT COLUMN COLUMN */}
          <Nav className="justify-content-end" activeKey="/home">
            <Nav.Item>
              <Nav.Link>
                <Link to="/contact">Contact</Link>
              </Nav.Link>
            </Nav.Item>
            {/* <Nav.Item>
              <Nav.Link eventKey="link-1">Link</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-2">Link</Nav.Link>
            </Nav.Item> */}
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Footer;
