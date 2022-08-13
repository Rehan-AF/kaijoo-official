import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import logo from "../../assets/logo.png";
import SearchBar from "../searchBar";
import logoSvg from "../../assets/font-1.svg";
import SwipeableTemporaryDrawer from "../drawer";
import { Link } from "react-router-dom";
const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.Header}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <Link to="/">
          <img src={logoSvg} width={100} height={90} alt="kaijoo" />
        </Link>
      </div>
      <div className={classes.SearchBar} style={{ width: "60%" }}>
        <SearchBar />
      </div>
      <div className={classes.signUpInBox}>
        <Typography variant="h6" className={classes.sign}>
          <b>Sign Up</b>
        </Typography>
        <Typography variant="h6">
          <b>|</b>
        </Typography>
        <Typography variant="h6" className={classes.sign}>
          <b>Sign In</b>
        </Typography>
      </div>
      <div className={classes.drawer}>
        <SwipeableTemporaryDrawer />
      </div>
    </div>
  );
};

export default Header;
const useStyles = makeStyles((theme) => ({
  Header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: "10% 10% 10% 0% / 100% 0% 0% 0%",
    gap: "30px",
    background:
      "transparent linear-gradient(180deg, #5AA0FF 0%, #368BFF 47%, #006CFF 100%) 0% 0% no-repeat padding-box;",
    padding: "15px 160px",
    [theme.breakpoints.down("sm")]: {
      padding: "0 30px",
    },
    [theme.breakpoints.down("xs")]: {
      borderRadius: "0px",
    },
  },
  brand: {
    fontSize: "50px",
  },
  SearchBar: {
    width: "60%",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  signUpInBox: {
    display: "flex",
    gap: "10px",
    color: "white",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  sign: {
    width: "78px",
  },
  drawer: {
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },
}));
