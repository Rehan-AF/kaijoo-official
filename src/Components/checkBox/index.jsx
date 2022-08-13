import { Checkbox, makeStyles, Typography } from "@material-ui/core";
import React, { useState } from "react";

const CheckBox = ({ label }) => {
  /**
   * @param {string} label
   */
  const classes = useStyles();
  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <div className={classes.container}>
      <Checkbox
        checked={checked}
        onChange={handleChange}
        inputProps={"primary checkbox"}
        color="primary"
      />
      <Typography className={classes.label}>{label}</Typography>
    </div>
  );
};

export default CheckBox;
const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    alignItems: "center",
  },
  checkbox: {
    color: "#0364FF",
  },
  label: {
    color: "black",
  },
}));
