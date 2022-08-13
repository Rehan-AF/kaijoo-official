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
        <Typography className={classes.typo}>Seller Name</Typography>
        <Typography>Description about seller</Typography>
        <div className={classes.btnBox}>
          <CustomButton
            children="Click Now"
            variant="blue"
            className={classes.btn}
          />
        </div>
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
    padding: "25px 20px",
  },
  logo: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  typo: {
    fontWeight: "bold",
  },
  btnBox: {
    marginTop: "10px",
    display: "flex",
    justifyContent: "center",
  },
  btn: {
    borderRadius: "50px",
  },
}));
