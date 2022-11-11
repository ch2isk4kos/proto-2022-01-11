import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const ArticlesSection2 = () => {
  return (
    <Row className="articles-section-2">
      <Col className="as2-left">
        <p>Section 2 Col 1</p>
      </Col>
      <Col className="as2-right">
        <p>Section 2 Col 2</p>
      </Col>
    </Row>
  );
};

export default ArticlesSection2;
