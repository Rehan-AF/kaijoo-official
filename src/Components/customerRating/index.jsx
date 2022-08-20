import React from "react";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import { makeStyles, Typography } from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import pic from "../../assets/philips.png";
const CustomerReview = ({
  name = "Lazada Customer",
  value = 5,
  description = "Seller is awesome. Delivery in the next day. Very impressive.",
}) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div>
        <AccountCircleOutlinedIcon className={classes.user} />
      </div>
      <div>
        <div>
          <Typography className={classes.name}>{name}</Typography>
          <Rating
            className={classes.stars}
            name="read-only"
            value={value}
            readOnly
          />
          <Typography className={classes.description}>{description}</Typography>
        </div>
        <div style={{ display: "flex" }}>
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
      </div>
    </div>
  );
};

export default CustomerReview;

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    gap: 20,
    padding: "36px",
  },
  user: {
    fontSize: "40px",
  },
  name: {
    fontSize: 13,
    fontWeight: "bold",
    marginBottom: 5,
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
}));
