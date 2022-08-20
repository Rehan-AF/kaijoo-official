import { makeStyles, Typography } from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import React from "react";
import shopIcon from "../../assets/shopIcon.png";
import logo from "../../assets/philips.png";
import CustomizedProgressBars from "../progressBar";

const ReviewDetails = ({
  value = 5,
  title,
  description,
  positive = 70,
  negative = 47,
  neutral = 10,
  rating = 7.8,
}) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div>
        <img src={logo} alt="logo" className={classes.img} />
      </div>
      <div>
        <Typography className={classes.title}>
          {title || "Philips Lighting Official Store SG"}
        </Typography>
        <Typography className={classes.description}>
          {description ||
            "Buy Ceiling Lights, LED Bulbs, Compact Fluorescent Bulbs from Philips Hue, philips lighting official & much more at Philips Lighting."}
        </Typography>
        <div>
          <img src={shopIcon} alt="icon" className={classes.Shopicon} />
          <Rating
            className={classes.stars}
            name="read-only"
            value={value}
            readOnly
          />
        </div>
      </div>
      <div className={classes.ratingDetails}>
        <div className={classes.ratingContainer}>
          <div>
            <Typography className={classes.typo}>Very Good</Typography>
            <Typography className={classes.typoSmall}>
              {positive + negative + neutral} reviews
            </Typography>
          </div>
          <div>
            <Typography className={classes.rating}>{rating}</Typography>
          </div>
        </div>
        <div>
          <div className={classes.ratingBox}>
            <CustomizedProgressBars value={positive} />
            <Typography>Positive</Typography>
          </div>
          <div className={classes.ratingBox}>
            <CustomizedProgressBars value={negative} />
            <Typography>Neutal</Typography>
          </div>
          <div className={classes.ratingBox}>
            <CustomizedProgressBars value={neutral} />
            <Typography>Negative</Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewDetails;
export const ReviewCard = ({
  value = 5,
  title,
  description,
  positive = 70,
  negative = 47,
  neutral = 10,
  rating = 7.8,
}) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div>
        <img src={logo} alt="logo" className={classes.img} />
      </div>
      <div>
        <Typography className={classes.title}>
          {title || "Philips Lighting Official Store SG"}
        </Typography>
        <Typography className={classes.description}>
          {description ||
            "Buy Ceiling Lights, LED Bulbs, Compact Fluorescent Bulbs from Philips Hue, philips lighting official & much more at Philips Lighting."}
        </Typography>
        <div>
          <img src={shopIcon} alt="icon" className={classes.Shopicon} />
          <Rating
            className={classes.stars}
            name="read-only"
            value={value}
            readOnly
          />
        </div>
      </div>
      <div className={classes.ratingDetails}>
        <div className={classes.ratingContainer}>
          <div>
            <Typography className={classes.typo}>Very Good</Typography>
            <Typography className={classes.typoSmall}>
              {positive + negative + neutral} reviews
            </Typography>
          </div>
          <div>
            <Typography className={classes.rating}>{rating}</Typography>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};
const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    gap: "10px",
    alignItems: "center",
    padding: "10px",
    borderRadius: "6px",
    boxShadow: "0px 0px 6px 2px #83838347",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      alignItems: "flex-start",
    },
  },
  title: {
    fontWeight: "bold",
    marginBottom: "10px",
  },
  description: {
    fontSize: "14px",
    marginBottom: "30px",
  },
  Shopicon: {
    width: "20px",
  },
  stars: {
    fontSize: "20px",
  },
  ratingDetails: {
    marginLeft: "15px",
  },
  ratingBox: {
    display: "flex",
    gap: "10px",
  },
  ratingContainer: {
    display: "flex",
    justifyContent: "flex-end",
    gap: "10px",
    marginBottom: "10px",
  },
  rating: {
    background: "#0364FF 0% 0% no-repeat padding-box",
    padding: "6px",
    borderRadius: "50px",
    color: "white",
  },
  typo: {
    fontWeight: "bold",
  },
  typoSmall: {
    fontSize: "12px",
    textAlign: "right",
  },
}));
