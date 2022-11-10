import React from "react";
// import { Routes, Route } from "react-router-dom";
import Navbar from "./nav/Navbar";
import MainContainer from "./MainContainer";
// import Landing from "./Landing";
// import Home from "./home/Home";
// import About from "./About";
// import Contact from "./Contact";
// import Articles from "./articles/Articles";
// import Article from "./articles/Article";
// import Signin from "./auth/Signin";
import Footer from "./nav/Footer";

const Layout = () => {
  return (
    <div className="Layout">
      <Navbar />
      <MainContainer />
      <Footer />

      {/* <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/article/:id" element={<Article />} />
        <Route path="/signin" element={<Signin />} />
      </Routes> */}
    </div>
  );
};

export default Layout;
