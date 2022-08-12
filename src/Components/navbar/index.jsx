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
    fontWeight: "500",
  };
  let inactive = {
    color: "#006CFF",
    textDecoration: "none",
    fontWeight: "500",
  };
  return (
    <div className={classes.navbar}>
      <NavLink
        to="/"
        style={({ isActive }) => (isActive ? activeStyle : inactive)}
        className={classes.link}
      >
        Home
      </NavLink>
      <NavLink
        to="/reviews"
        style={({ isActive }) => (isActive ? activeStyle : inactive)}
        className={classes.link}
      >
        Reviews
      </NavLink>
      <NavLink
        to="/blog"
        style={({ isActive }) => (isActive ? activeStyle : inactive)}
        className={classes.link}
      >
        Blogs
      </NavLink>
      <NavLink
        to="/about"
        style={({ isActive }) => (isActive ? activeStyle : inactive)}
        className={classes.link}
      >
        About Us
      </NavLink>
      <NavLink
        to="/contact"
        style={({ isActive }) => (isActive ? activeStyle : inactive)}
        className={classes.link}
      >
        Contact Us
      </NavLink>
    </div>
  );
};

export default Navbar;
const useStyles = makeStyles((theme) => ({
  navbar: {
    display: "flex",
    padding: "15px 160px",
    [theme.breakpoints.down("sm")]: {
      padding: "15px 30px",
      fontSize: "16px",
    },
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
  link: {
    fontSize: "18px",
    marginRight: "10px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "12px",
    },
  },
}));
