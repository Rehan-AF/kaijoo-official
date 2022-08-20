import { makeStyles } from "@material-ui/core";
import React from "react";
import CustomerReview from "../../Components/customerRating";
import ReviewDetails from "../../Components/reviewDetails";

const Reviews = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <ReviewDetails />
      <br />
      <br />
      <br />
      <div className={classes.reviewBox}>
        <CustomerReview />
        <CustomerReview />
        <CustomerReview />
        <CustomerReview />
      </div>
    </div>
  );
};

export default Reviews;
const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    gap: "space-between",
    justifyContent: "space-between",
    padding: "15px 160px 0px 160px",
    [theme.breakpoints.down("sm")]: {
      padding: "15px 30px 0px 30px",
    },
  },
  reviewBox: {
    boxShadow: "0px -5px 10px #00000012",
  },
}));
