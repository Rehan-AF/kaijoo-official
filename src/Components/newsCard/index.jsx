import { makeStyles, Typography } from "@material-ui/core";
import React from "react";
import img from "../../assets/newsCard.png";
import CustomButton from "../buttons";
const NewsCard = () => {
  const classes = useStyles();
  return (
    <div className={classes.card}>
      <div className={classes.cardShadow}>
        <div>
          <img src={img} alt="thumbnail" />
        </div>
        <div className={classes.details}>
          <Typography className={classes.date}>15 August 2021</Typography>
          <Typography className={classes.title}>
            MDTCA gets 2,500 e-commerce fraud complaints monthly.
          </Typography>
          <CustomButton children="Show more" variant="blue" />
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
const useStyles = makeStyles((theme) => ({
  card: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  details: {
    paddingRight: "10px",
  },
  date: {
    color: "#575757",
    marginBottom: "9px",
  },
  title: {
    color: "#000AFF",
    fontWeight: "400",
    fontSize: "20px",
    marginBottom: "20px",
  },
  cardShadow: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "60px",
    background: "#FFFFFF 0% 0% no-repeat padding-box",
    boxShadow: "0px 3px 6px #00000029",
  },
}));
