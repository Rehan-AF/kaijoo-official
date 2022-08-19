import React from "react";
import DropdownReUse from "../../Components/dropDownResuse";
import { Typography, makeStyles } from "@material-ui/core";

const ReviewMain = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.container}>
        <div className={classes.head}>
          <Typography className={classes.typo}>Filter</Typography>
          <DropdownReUse label="Plateform" />
          <DropdownReUse label="Countries" />
          <DropdownReUse label="Ratings" />
          <DropdownReUse label="Catagories" />
        </div>
      </div>
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  container: {
    padding: "40px 160px",
    [theme.breakpoints.down("sm")]: {
      padding: "20px 30px",
    },
  },
  head: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
  },
  typo: {
    fontWeight: "bold",
  },
}));

export default ReviewMain;
