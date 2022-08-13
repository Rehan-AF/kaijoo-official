import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Blog from "../Components/blog";
import Footer from "../Components/footer";
import Header from "../Components/header";
import Navbar from "../Components/navbar";
import SellerCard from "../Components/sellerCard";
import Home from "../Pages/Home";

const Routers = () => {
  return (
    <Router>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />}></Route>
        <Route path="/blog" exact element={<Blog />}></Route>
        <Route path="/about" exact element={<Home />}></Route>
        <Route path="/contact" exact element={<Home />}></Route>
        <Route path="/reviews" exact element={<Home />}></Route>
        <Route path="/seller" exact element={<SellerCard />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
};

export default Routers;
