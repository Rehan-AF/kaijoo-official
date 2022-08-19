import { makeStyles } from "@material-ui/core";
import React from "react";
import ReviewDetails from "../../Components/reviewDetails";

const Reviews = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <ReviewDetails />
    </div>
  );
};

export default Reviews;
const useStyles = makeStyles((theme) => ({
  container: {
    padding: "15px 160px",
    [theme.breakpoints.down("sm")]: {
      padding: "15px 30px",
    },
  },
}));
