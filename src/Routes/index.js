import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Blog from "../Components/blog";
import Footer from "../Components/footer";
import Header from "../Components/header";
import Navbar from "../Components/navbar";
import Home from "../Pages/Home";
import Seller from "../Pages/seller";
import Reviews from "../Pages/reviewDetailPage";
import Review from "../Pages/ReviewMain";

const Routers = () => {
  return (
    <Router>
      <Header />
      <Navbar />
      <Routes>
        {["/home", "/"].map((path) => (
          <Route exact path={path} key={path} element={<Home />} />
        ))}
        <Route path="/blog" exact element={<Blog />}></Route>
        <Route path="/about" exact element={<Home />}></Route>
        <Route path="/contact" exact element={<Home />}></Route>
        <Route path="/reviews" exact element={<Review />}></Route>
        <Route
          path="/reviews/reviewsDetails"
          exact
          element={<Reviews />}
        ></Route>
        <Route path="/seller/:id" exact element={<Seller />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
};

export default Routers;
