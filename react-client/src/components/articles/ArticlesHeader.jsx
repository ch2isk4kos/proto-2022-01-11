import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

const ArticlesHeader = () => {
  return (
    <Row className="articles-header">
      <Col className="ah-left">
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
      <Col xs={6} className="ah-right">
        <p>Header Column 2</p>
        {/* <Card className="text-center">
          <Card.Header>Featured</Card.Header>

          <Card.Body>
            <Card.Title>Special title treatment</Card.Title>

            <Card.Text>
              With supporting text below as a natural lead-in to additional
              content.
            </Card.Text>

            <Button variant="primary">
              <Link to={`#`} style={{ color: "white" }}>
                Read More
              </Link>
            </Button>

          </Card.Body>
          <Card.Footer className="text-muted">2 days ago</Card.Footer>
        </Card> */}
      </Col>
    </Row>
  );
};

export default ArticlesHeader;
