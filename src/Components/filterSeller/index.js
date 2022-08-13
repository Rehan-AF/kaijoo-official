import { makeStyles, Typography } from "@material-ui/core";
import React from "react";
import Dropdown from "../dropdown";

const FilterSellerLevel = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div>
        <Typography>Filter</Typography>
        <Dropdown />
      </div>
    </div>
  );
};

export default FilterSellerLevel;
const useStyles = makeStyles((theme) => ({
  container: {
    padding: "40px 160px",
    [theme.breakpoints.down("sm")]: {
      padding: "20px 30px",
    },
  },
}));
