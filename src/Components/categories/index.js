import { makeStyles } from "@material-ui/core";
import React from "react";
import CustomButton from "../buttons";

const Categories = () => {
  const classes = useStyles();
  return (
    <div className={classes.categories}>
      <CustomButton
        variant="primary"
        children={
          <span className={classes.break}>
            Automotie <br /> & <br />
            Motorbike
          </span>
        }
      />
      <CustomButton
        variant="primary"
        children={
          <span className={classes.break}>
            Babies <br /> & <br />
            Toys
          </span>
        }
      />
      <CustomButton
        variant="primary"
        children={
          <span className={classes.break}>
            Electronic <br /> Accessories
          </span>
        }
      />
      <CustomButton
        variant="primary"
        children={
          <span className={classes.break}>
            Electronic <br /> Devices
          </span>
        }
      />
      <CustomButton
        variant="primary"
        children={
          <span className={classes.break}>
            Groceries <br /> & <br />
            Pets
          </span>
        }
      />
      <CustomButton
        variant="primary"
        children={
          <span className={classes.break}>
            Health
            <br /> &<br /> Beauty
          </span>
        }
      />
      <CustomButton
        variant="primary"
        children={
          <span className={classes.break}>
            Home
            <br /> &<br /> Lifestyle
          </span>
        }
      />
      <CustomButton
        variant="primary"
        children={
          <span className={classes.break}>
            Men’s <br />
            Fashion
          </span>
        }
      />
      <CustomButton
        variant="primary"
        children={
          <span className={classes.break}>
            Sports
            <br /> &<br /> Outdoor
          </span>
        }
      />
      <CustomButton
        variant="primary"
        children={
          <span className={classes.break}>
            TV & <br />
            Home <br />
            Appliance
          </span>
        }
      />
      <CustomButton
        variant="primary"
        children={
          <span className={classes.break}>
            Watches
            <br /> & <br />
            Accessories
          </span>
        }
      />
      <CustomButton
        variant="primary"
        children={
          <span className={classes.break}>
            Home <br />&<br /> Lifestyle
          </span>
        }
      />
      <CustomButton
        variant="primary"
        children={
          <span className={classes.break}>
            Men’s <br />
            Fashion
          </span>
        }
      />
      <CustomButton
        variant="primary"
        children={
          <span className={classes.break}>
            Sports <br />&<br /> Outdoor
          </span>
        }
      />
      <CustomButton
        variant="primary"
        children={
          <span className={classes.break}>
            TV & <br />
            Home <br />
            Appliance
          </span>
        }
      />
      <CustomButton
        variant="primary"
        children={
          <span className={classes.break}>
            Watches
            <br /> & <br />
            Accessories
          </span>
        }
      />
      <CustomButton
        variant="primary"
        children={
          <span className={classes.break}>
            Women’s <br />
            Fashion
          </span>
        }
      />
    </div>
  );
};

export default Categories;
const useStyles = makeStyles(() => ({
  categories: {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
    padding: "10px 160px 30px 160px",
  },
}));
