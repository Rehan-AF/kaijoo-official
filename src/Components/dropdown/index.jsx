import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import CustomButton from "../buttons";
import CheckBox from "../checkBox";

export default function Dropdown({ id, setFilterValue }) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [values, setValues] = useState([]);

  useEffect(() => {
    setValues([parseInt(id)]);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);
  useEffect(() => {
    setFilterValue(values);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [values]);
  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const handleClickAway = () => {
    setOpen(false);
  };
  const handleValue = (e) => {
    const value = e.target.value;
    const isActive = e.target.checked;
    if (!values.includes(value)) setValues([...values, value]);
    if (values.includes(value) && !isActive)
      // eslint-disable-next-line eqeqeq
      setValues(values.filter((_value) => _value != value));
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <div className={classes.root}>
        <CustomButton variant="blue" type="button" onClick={handleClick}>
          level{" "}
          {values.map((item) => {
            return (
              <div key={item} className={classes.levelMap}>
                {" "}
                {item}{" "}
              </div>
            );
          })}
        </CustomButton>
        {open ? (
          <div className={classes.dropdown}>
            <div className={classes.arrow}></div>
            <CheckBox
              label={"level1"}
              value={1}
              checked={values.includes(1)}
              onChange={handleValue}
            />
            <CheckBox
              label={"level2"}
              value={2}
              checked={values.includes(2)}
              onChange={handleValue}
            />

            <CheckBox
              label={"level3"}
              value={3}
              checked={values.includes(3)}
              onChange={handleValue}
            />

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
  levelMap: {
    marginRight: "5px",
  },
}));
