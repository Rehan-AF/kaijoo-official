import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "../Components/footer";
import Header from "../Components/header";
import Navbar from "../Components/navbar";
import Home from "../Pages/Home";

const Routers = () => {
  return (
    <Router>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />}></Route>
        <Route path="/blog" exact element={<Home />}></Route>
        <Route path="/about" exact element={<Home />}></Route>
        <Route path="/contact" exact element={<Home />}></Route>
        <Route path="/reviews" exact element={<Home />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
};

export default Routers;
