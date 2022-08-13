import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import CustomButton from "../buttons";
import CheckBox from "../checkBox";

export default function Dropdown() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <div className={classes.root}>
        <CustomButton variant="blue" type="button" onClick={handleClick}>
          Open menu dropdown
        </CustomButton>
        {open ? (
          <div className={classes.dropdown}>
            <div className={classes.arrow}></div>
            <CheckBox label={"level1"} />
            <CheckBox label={"level2"} />
            <CheckBox label={"level3"} />

            <div className={classes.btnBox}>
              <CustomButton
                variant="blue"
                children="done"
                onClick={handleClick}
              />
            </div>
          </div>
        ) : null}
      </div>
    </ClickAwayListener>
  );
}
const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
  },
  dropdown: {
    position: "absolute",
    top: 50,
    right: 0,
    left: 0,
    zIndex: 1,
    border: "1px solid",
    padding: theme.spacing(1),
    backgroundColor: theme.palette.background.paper,
    width: "150px",
  },
  arrow: {
    position: "absolute",
    width: "20px",
    height: "20px",
    backgroundColor: "white",
    top: -11,
    left: 20,
    borderLeft: "1px solid black",
    borderTop: "1px solid black",
    transform: "rotate(45deg)",
  },
  btnBox: {
    display: "flex",
    justifyContent: "center",
  },
}));
