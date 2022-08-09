import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "../Components/header";
import Home from "../Pages/Home";

const Routers = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />}></Route>
      </Routes>
      <div>footer</div>
    </Router>
  );
};

export default Routers;
