// import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Navbar from "./nav/Navbar";
import Landing from "./Landing";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Articles from "./articles/Articles";
import Signin from "./auth/Signin";
import Footer from "./Footer";

import React from "react";

const Layout = () => {
  return (
    <div className="Layout">
      <Navbar />

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default Layout;
