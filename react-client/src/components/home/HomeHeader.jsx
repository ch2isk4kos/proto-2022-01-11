import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Carousel from "react-bootstrap/Carousel";

const HomeHeader = () => {
  return (
    // <Row style={{ height: "100%" }}>
    <Row className="home-header">
      {/* HOME HEADER LEFT */}
      <Col className="hh-left">
        <p>Column 1</p>
      </Col>
      {/* HOME HEADER MIDDLE */}
      <Col xs={6} className="hh-middle">
        <Carousel className="Carousel" variant="dark">
          <Carousel.Item interval={2000}>
            <img
              className="d-block w-100"
              src="holder.js/800x400?text=First slide&bg=373940"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img
              className="d-block w-100"
              src="holder.js/800x400?text=Second slide&bg=282c34"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img
              className="d-block w-100"
              src="holder.js/800x400?text=Third slide&bg=20232a"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Col>
      {/* HOME HEADER RIGHT */}
      <Col className="hh-right">
        <p>Column 3</p>
      </Col>
    </Row>
  );
};

export default HomeHeader;
