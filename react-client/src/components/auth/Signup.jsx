import React from "react";
import SignupForm from "./SignupForm";
import Container from "react-bootstrap/Container";

const Signup = () => {
  return (
    <div className="Signup">
      <Container>
        <h1>Signup</h1>
        <SignupForm />
      </Container>
    </div>
  );
};

export default Signup;
