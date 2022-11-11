import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const HomeSection3 = () => {
  return (
    <Row className="home-section-3">
      <h5>Current News</h5>
      <Col xs={8} style={{ border: "2px solid orange" }}>
        <p>Column 1</p>
      </Col>
      <Col style={{ border: "2px solid orange" }}>
        <p>Column 2</p>
      </Col>
    </Row>
  );
};

export default HomeSection3;
