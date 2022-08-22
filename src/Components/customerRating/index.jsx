import React from "react";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import { Divider, makeStyles, Typography } from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import pic from "../../assets/philips.png";
import {
  AddBox,
  Facebook,
  LinkRounded,
  MailRounded,
  Twitter,
} from "@material-ui/icons";

const CustomerReview = ({
  name = "Lazada Customer",
  value = 5,
  description = "Seller is awesome. Delivery in the next day. Very impressive.",
  date = "2 years ago",
}) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div>
        <AccountCircleOutlinedIcon className={classes.user} />
      </div>
      <div className={classes.details}>
        <div>
          <div className={classes.title}>
            <Typography className={classes.name}>{name}</Typography>
            <Typography className={classes.date}>{date}</Typography>
          </div>
          <Rating
            className={classes.stars}
            name="read-only"
            value={value}
            readOnly
          />
          <Typography className={classes.description}>{description}</Typography>
        </div>
        <div className={classes.pictureBpx}>
          <div>
            <img
              className={classes.imgComment}
              src={pic}
              alt="pic"
              width="70px"
            />
            <img
              className={classes.imgComment}
              src={pic}
              alt="pic"
              width="70px"
            />
            <img
              className={classes.imgComment}
              src={pic}
              alt="pic"
              width="70px"
            />
          </div>
          <div>
            <AddBox className={classes.addBox} />
            <Facebook className={classes.facebook} />
            <Twitter className={classes.twitter} />
            <MailRounded className={classes.mailRounded} />
            <LinkRounded className={classes.linkRounded} />
          </div>
        </div>
      </div>
      <Divider />
    </div>
  );
};

export default CustomerReview;

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    gap: 20,
    padding: "36px",
  },
  title: {
    display: "flex",
    justifyContent: "space-between",
  },
  details: {
    flexGrow: 1,
  },
  user: {
    fontSize: "40px",
  },
  name: {
    fontSize: 13,
    fontWeight: "bold",
    marginBottom: 5,
  },
  date: {
    fontSize: 13,
  },
  stars: {
    fontSize: 16,
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 15,
  },
  imgComment: {
    border: "1px solid black",
    padding: "5px",
    margin: "5px",
  },
  pictureBpx: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "baseline",
    [theme.breakpoints.down("sm")]: {
      flexWrap: "wrap",
    },
  },
  addBox: {
    color: "#347deb",
    fontSize: "30px",
    cursor: "pointer",
  },
  facebook: {
    color: "#4267B2",
    fontSize: "30px",
    cursor: "pointer",
  },
  twitter: {
    color: "#00acee",
    fontSize: "30px",
    cursor: "pointer",
  },
  mailRounded: {
    color: "#347deb",
    fontSize: "30px",
    cursor: "pointer",
  },
  linkRounded: {
    transform: "rotate(-45deg) ",
    marginBottom: "3px",
    cursor: "pointer",
  },
}));
