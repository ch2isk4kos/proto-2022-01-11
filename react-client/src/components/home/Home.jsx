import React from "react";
import HomeHeader from "./HomeHeader";
import HomeSection2 from "./HomeSection2";
import HomeSection3 from "./HomeSection3";
import Container from "react-bootstrap/Container";

// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";

const Home = () => {
  return (
    <div className="Home">
      <Container>
        {/* <Container fluid> */}
        {/* <div className="home-header"> */}
        <HomeHeader />
        {/* </div> */}
        {/* <div className="home-section-2"> */}
        <HomeSection2 />
        {/* </div> */}
        <div className="home-section-3">
          <HomeSection3 />
        </div>
      </Container>
    </div>
  );
};

export default Home;
