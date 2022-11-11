import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";

const SigninForm = () => {
  return (
    <Row className="signin-form">
      {/* <Col></Col> */}
      <Col xs={6} className="sf-col-1"></Col>
      <Col className="sf-col-2">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail" hasValidation>
            {/* <Form.Label>Email address</Form.Label> */}
            <Form.Control type="email" placeholder="Enter email" />
            {/* <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text> */}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            {/* <Form.Label>Password</Form.Label> */}
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGridCheckbox">
            <Form.Check type="checkbox" label="Remember Me" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Col>
      {/* <Col></Col> */}
    </Row>
  );
};

export default SigninForm;
