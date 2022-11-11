import React from "react";
import HighlightCard from "./HomeHighlightCard";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const HomeSection2 = () => {
  return (
    <Row className="home-section-2">
      <h1>Today's Highlights</h1>
      <Col>
        <HighlightCard />
      </Col>
      <Col>
        <HighlightCard />
      </Col>
      <Col>
        <HighlightCard />
      </Col>
      <Col>
        <HighlightCard />
      </Col>
      <Col>
        <HighlightCard />
      </Col>
    </Row>
  );
};

export default HomeSection2;
