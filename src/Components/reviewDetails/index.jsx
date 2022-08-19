import { makeStyles, Typography } from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import React from "react";
import shopIcon from "../../assets/shopIcon.png";
import logo from "../../assets/philips.png";
import CustomizedProgressBars from "../progressBar";

const ReviewDetails = ({ value = 5, title, description }) => {
  const classes = useStyles();
  return (
    <div style={{ display: "flex" }}>
      <div>
        <img src={logo} alt="logo" />
      </div>
      <div>
        <Typography>{title || "Philips Lighting Official Store SG"}</Typography>
        <Typography>
          {description ||
            "Buy Ceiling Lights, LED Bulbs, Compact Fluorescent Bulbs from Philips Hue, philips lighting official & much more at Philips Lighting."}
        </Typography>
        <div>
          <img src={shopIcon} alt="icon" />
          <Rating name="read-only" value={value} readOnly />
        </div>
      </div>
      <div>
        <div className={classes.ratingBox}>
          <CustomizedProgressBars value={70} />
          <Typography>Positive</Typography>
        </div>
        <div className={classes.ratingBox}>
          <CustomizedProgressBars value={47} />
          <Typography>Neutal</Typography>
        </div>
        <div className={classes.ratingBox}>
          <CustomizedProgressBars value={"01"} />
          <Typography>Negative</Typography>
        </div>
      </div>
    </div>
  );
};

export default ReviewDetails;

const useStyles = makeStyles((theme) => ({
  ratingBox: {
    display: "flex",
    gap: "10px",
  },
}));
