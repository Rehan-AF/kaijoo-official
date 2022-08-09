import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "../Components/footer";
import Header from "../Components/header";
import Home from "../Pages/Home";

const Routers = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
};

export default Routers;
