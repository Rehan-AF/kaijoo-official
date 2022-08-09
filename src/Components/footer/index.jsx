import { makeStyles, Typography } from "@material-ui/core";
import React from "react";
import CustomButton from "../buttons";

const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.footer}>
      <div style={{ width: "80%" }}>
        <Typography className={classes.typo}>
          Seller Review Report (Customer Insights report for Seller, Product &
          Service) is also available as a monthly subscription. Please contact
          us to know more. © 2020 - 2022 - Kaijoo. All rights reserved.
        </Typography>
      </div>
      <div className={classes.buttonBox}>
        <CustomButton variant="root" children="Agent Sign Up" />
        <CustomButton variant="root" children="Seller Sign Up" />
      </div>
    </div>
  );
};

export default Footer;
const useStyles = makeStyles(() => ({
  footer: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    borderRadius: "10% 10% 10% 0% / 100% 0% 0% 0%",
    gap: "20px",
    background:
      "transparent linear-gradient(180deg, #5AA0FF 0%, #368BFF 47%, #006CFF 100%) 0% 0% no-repeat padding-box;",
    padding: "19px 160px 28px 160px",
  },
  typo: {
    color: "#FFFFFF",
    textAlign: "center",
    fontSize: "12px",
  },
  buttonBox: {
    display: "flex",
    gap: "10px",
  },
}));
