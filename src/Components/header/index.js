import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import logo from "../../assets/logo.png";
import SearchBar from "../searchBar";
const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.Header}>
      <div style={{ display: "flex" }}>
        <img src={logo} alt="logo" />
        <Typography className={classes.brand} variant="h2">
          kaijoo
        </Typography>
      </div>
      <div style={{ width: "60%" }}>
        <SearchBar />
      </div>
      <div className={classes.signUpInBox}>
        <Typography variant="h6">
          <b>Sign Up</b>
        </Typography>
        <Typography variant="h6">
          <b>|</b>
        </Typography>
        <Typography variant="h6">
          <b>Sign In</b>
        </Typography>
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
    padding: "34px 196px",
  },
  brand: {
    fontSize: "50px",
  },
  signUpInBox: {
    display: "flex",
    gap: "10px",
    color: "white",
  },
}));
