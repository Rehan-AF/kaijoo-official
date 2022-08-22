import { makeStyles, Typography } from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import React, { useState } from "react";
import CustomButton from "../buttons";

const RatingCard = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  return (
    <div className={classes.container}>
      <Typography className={classes.title}>
        Lets rate your seller's services
      </Typography>
      <Typography className={classes.subTitle}>
        How was your shopping experience with Kiranjeet Kaur?
      </Typography>
      <Rating
        className={classes.subRating}
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
      <CustomButton variant="darkBlue" children="Next" />
    </div>
  );
};

export default RatingCard;
const useStyles = makeStyles((theme) => ({
  container: {
    background: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    padding: "10px 10px 20px 10px",
  },
  title: {
    fontWeight: "bold",
  },
  subTitle: {
    marginBottom: "10px",
  },
  subRating: {
    fontSize: "40px",
    marginBottom: "10px",
  },
}));
