import { makeStyles, Typography } from "@material-ui/core";
import React from "react";
import logoMain from "../../assets/iconMain.png";
import shopIcon from "../../assets/shopIcon.png";
import CustomButton from "../buttons";
const SellerCard = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.logo}>
        <img src={logoMain} alt="logo" />
        <img src={shopIcon} alt="logo" />
      </div>
      <div className={classes.details}>
        <Typography>Seller Name</Typography>
        <Typography>Description about seller</Typography>
        <CustomButton children="Click Now" variant="blue" />
      </div>
    </div>
  );
};

export default SellerCard;

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    gap: "36px",
    background: "#FFFFFF 0% 0% no-repeat padding-box",
    boxShadow: "0px 3px 6px #00000029",
  },
  logo: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
}));
