import { makeStyles } from "@material-ui/core";
import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const classes = useStyles();

  let activeStyle = {
    textDecoration: "none",
    color: "#006CFF",
    borderBottom: "5px solid #FF6600",
    paddingBottom: "3px",
    marginRight: "20px",
    fontSize: "18px",
    fontWeight: "500",
  };
  let inactive = {
    color: "#006CFF",
    textDecoration: "none",
    marginRight: "20px",
    fontSize: "18px",
    fontWeight: "500",
  };
  return (
    <div className={classes.navbar}>
      <NavLink
        to="/"
        style={({ isActive }) => (isActive ? activeStyle : inactive)}
      >
        Home
      </NavLink>
      <NavLink
        to="/reviews"
        style={({ isActive }) => (isActive ? activeStyle : inactive)}
      >
        Reviews
      </NavLink>
      <NavLink
        to="/blog"
        style={({ isActive }) => (isActive ? activeStyle : inactive)}
      >
        Blogs
      </NavLink>
      <NavLink
        to="/about"
        style={({ isActive }) => (isActive ? activeStyle : inactive)}
      >
        About Us
      </NavLink>
      <NavLink
        to="/contact"
        style={({ isActive }) => (isActive ? activeStyle : inactive)}
      >
        Contact Us
      </NavLink>
    </div>
  );
};

export default Navbar;
const useStyles = makeStyles(() => ({
  navbar: {
    display: "flex",
    padding: "15px 160px",
  },
  inactive: {
    color: "#006CFF",
    textDecoration: "none",
    marginRight: "10px",
  },
  active: {
    textDecoration: "none",
    color: "#006CFF",
  },
}));
