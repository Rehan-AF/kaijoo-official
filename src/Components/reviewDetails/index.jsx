import { Typography } from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import React from "react";
import shopIcon from "../../assets/shopIcon.png";
import logo from "../../assets/philips.png";
const ReviewDetails = ({ value = 5, title, description }) => {
  return (
    <div>
      <div>
        <img src={logo} alt="logo" />
      </div>
      <div>
        <Typography>{title || "Philips Lighting Official Store SG"}</Typography>
        <Typography>
          Buy Ceiling Lights, LED Bulbs, Compact Fluorescent Bulbs from Philips
          Hue, philips lighting official & much more at Philips Lighting.
        </Typography>
        <div>
          <img src={shopIcon} alt="icon" />
          <Rating name="read-only" value={value} readOnly />
        </div>
      </div>
    </div>
  );
};

export default ReviewDetails;
