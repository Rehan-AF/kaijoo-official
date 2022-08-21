import React from "react";
import { Typography, Box, makeStyles } from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import CustomButton from "../buttons";
import CustomInputField from "../textField";

const ReviewTextEditor = () => {
  const classes = useStyles();
  return (
    <Box>
      <Box mb={3} className={classes.rating}>
        <Typography className={classes.ratingText}>Perfect</Typography>
        <Rating name="read-only" value={5} readOnly />
      </Box>
      <Typography align="center">
        What did you like about the seller?
      </Typography>
      <Box className={classes.quickMsg}>
        <CustomButton variant="grey">Fast Delivery</CustomButton>
        <CustomButton variant="grey">Friendly</CustomButton>
        <CustomButton variant="grey">Packaging</CustomButton>
      </Box>
      <Box className={classes.textBox}>
        <CustomInputField
          placeholder="Write review here..."
          multiline
          maxRows={5}
          variant="outlined"
        />
      </Box>
      <Box className={classes.quickButton}>
        <CustomButton variant="outlined" type="darkBlue">
          Cancel
        </CustomButton>
        <CustomButton variant="darkBlue" className={classes.submitBtn}>
          Submit
        </CustomButton>
      </Box>
    </Box>
  );
};

export default ReviewTextEditor;

const useStyles = makeStyles((theme) => ({
  ratingText: {
    fontWeight: "bold",
  },
  rating: {
    display: "flex",
    justifyContent: "center",
    padding: "1em",
  },
  submitBtn: {
    padding: "10px 30px",
    borderRadius: "25px",
    color: "#ffffff",
    fontWeight: "bold",
  },
  quickMsg: {
    display: "flex",
    justifyContent: "center",
    padding: "1em",
  },
  quickButton: {
    display: "flex",
    justifyContent: "center",
    padding: "1em",
  },
  textBox: {
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
}));
