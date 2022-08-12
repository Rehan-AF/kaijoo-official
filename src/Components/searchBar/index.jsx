import { Button, InputBase, makeStyles } from "@material-ui/core";
import React from "react";

const SearchBar = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <InputBase
        className={classes.input}
        placeholder="Search for sellers, products and services"
      />
      <Button className={classes.button}>Go</Button>
    </div>
  );
};

export default SearchBar;
const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: " #FFFFFF 0% 0% no-repeat padding-box ",
    boxShadow: "inset 0px 3px 6px #00000029",
    height: "50px",
    borderRadius: "12px",
    width: "100%",
    padding: "0 3px 0 12px",
    [theme.breakpoints.down("sm")]: {
      width: "90%",
    },
  },
  button: {
    background:
      "transparent linear-gradient(180deg, #FF9315 0%, #FF6600 100%) 0% 0% no-repeat padding-box",
    boxShadow: " inset 0px 3px 6px #00000029",
    borderRadius: "12px",
    color: "white",
    fontWeight: "bold",
    textTransform: "capitalize",
    fontSize: "19px",
  },
  input: {
    width: "calc(100% - 75px)",
  },
}));
