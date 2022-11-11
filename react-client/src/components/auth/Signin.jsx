import React from "react";
import SigninForm from "./SigninForm";
import Container from "react-bootstrap/Container";

const Signin = () => {
  return (
    <div className="Signin">
      <h1>Signin</h1>
      <Container>
        <SigninForm />
      </Container>
    </div>
  );
};

export default Signin;
