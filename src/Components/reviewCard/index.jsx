import { Button, makeStyles, Typography } from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import React from "react";
import shopIcon from "../../assets/shopIcon.png";
import logo from "../../assets/philips.png";
import CustomButton from "../buttons";
import { Link } from "react-router-dom";

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
      <div className={classes.details}>
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
        <div style={{ textAlign: "center" }}>
          <Link to="/reviews/reviewsDetails" className={classes.links}>
            <CustomButton variant="darkBlue" children="Review Now" />
          </Link>
        </div>
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
    [theme.breakpoints.down("xs")]: {
      alignItems: "center",
    },
  },
  details: {
    borderRight: "0.5px solid #7070705c",
    paddingRight: "15px",
    [theme.breakpoints.down("sm")]: {
      border: "none",
      paddingRight: "0",
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
  ratingBox: {
    display: "flex",
    gap: "10px",
  },
  ratingContainer: {
    display: "flex",
    justifyContent: "flex-end",
    gap: "10px",
    marginBottom: "20px",
    width: "127px",
    [theme.breakpoints.down("xs")]: {
      justifyContent: "center",
      width: "100%",
    },
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
  links: {
    textDecoration: "none",
  },
}));
