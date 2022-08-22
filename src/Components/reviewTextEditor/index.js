import React from "react";
import { Typography, Box, makeStyles } from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import CustomButton from "../buttons";
import CustomInputField from "../textField";
import { useDispatch } from "react-redux";
import { setCancel } from "../../features/ratingNextSlicer/ratingNextSlicer";

const ReviewTextEditor = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  return (
    <Box className={classes.container}>
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
          className={classes.textInput}
        />
      </Box>
      <Box className={classes.quickButton}>
        <CustomButton
          variant="outline"
          className={classes.cancelBtn}
          onClick={() => {
            dispatch(setCancel());
          }}
        >
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
  container: {
    background: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    padding: "10px 10px 20px 10px",
  },
  ratingText: {
    fontWeight: "bold",
  },
  rating: {
    display: "flex",
    justifyContent: "center",
    padding: "1em",
  },
  submitBtn: {
    padding: "5px 30px",
    borderRadius: "25px",
    color: "#ffffff",
    fontWeight: "bold",
    marginLeft: "5em",
    [theme.breakpoints.down("xs")]: {
      marginLeft: "2em",
    },
  },
  cancelBtn: {
    padding: "5px 20px",
    borderRadius: "25px",

    marginRight: "5em",
    [theme.breakpoints.down("xs")]: {
      marginRight: "2em",
    },
  },
  quickMsg: {
    display: "flex",
    justifyContent: "center",
    padding: "1em",
  },
  quickButton: {
    display: "flex",
    justifyContent: "space-around",
    padding: "1em",
  },
  textBox: {
    textAlign: "center",
  },
  textInput: {
    [theme.breakpoints.down("xs")]: {
      width: "250px",
    },
  },
}));
