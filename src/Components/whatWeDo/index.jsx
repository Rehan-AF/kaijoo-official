import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import img from "../../assets/laptop.jpg";

const WhatWeDo = () => {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.topHead}></div>
      <div className={classes.home}>
        <div className={classes.subDiv}>
          <div className={classes.white}>
            <Typography variant="p" className={classes.whiteTypo}>
              What We Do?
            </Typography>
          </div>
          <div ClassName={classes.lastDiv}>
            <Typography className={classes.lastDivTypo}>
              We are verifying each Seller's genuinity by running background
              checks on company registration and owners as well as doing product
              and coresponding SKU verifications. Each store verified by us has
              an official Verified by Kaijoo™ icon next to their name. If you
              are a store owner and would like to verify your store with us,
              please go to our Seller Sign Up page and we will reach out to you
              with next steps.
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
const useStyles = makeStyles(() => ({
  topHead: {
    height: "40px",
    borderRadius: "10% 5% 28% 0% / 0% 100% 0% 10%  ",
    background:
      "transparent linear-gradient(180deg, #5AA0FF 0%, #368BFF 47%, #006CFF 100%) 0% 0% no-repeat padding-box",
  },
  home: {
    background: `url(${img})`,
    color: "white",
    textAlign: "center",
  },
  subDiv: {
    background: "#0D73FFD9 0% 0% no-repeat padding-box",
  },
  white: {
    background: "white",
    padding: "5px",
  },
  whiteTypo: {
    color: "#006CFF",
    fontSize: "26px",
    fontWeight: "500",
  },
  lastDivTypo: {
    padding: "34px 160px 34px 160px",
  },
}));
