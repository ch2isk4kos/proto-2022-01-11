import React from "react";
import Landing from "./landing/Landing";
import Home from "./home/Home";
import About from "./About";
import Contact from "./Contact";
import Articles from "./articles/Articles";
import Article from "./articles/Article";
import Signin from "./auth/Signin";
import Signup from "./auth/Signup";
import { Routes, Route } from "react-router-dom";

const MainContainer = () => {
  return (
    <main className="MainContainer">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/article/:id" element={<Article />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </main>
  );
};

export default MainContainer;
