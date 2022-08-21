import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";
import { Typography } from "@material-ui/core";

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 10,
    borderRadius: 5,
    width: 200,
    [theme.breakpoints.down("xs")]: {
      width: 150,
      margin: "0 auto",
    },
  },
  colorPrimary: {
    backgroundColor: "transparent",
  },
  bar: {
    borderRadius: 5,
    backgroundColor: "#1a90ff",
  },
}))(LinearProgress);

export default function CustomizedProgressBars({ value = 70 }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.progress}>
        <BorderLinearProgress variant="determinate" value={value} />
      </div>
      <Typography>{value}</Typography>
    </div>
  );
}

const useStyles = makeStyles({
  root: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row-reverse",
    gap: "10px",
    justifyContent: "flex-start",
  },
  progress: {
    transform: "rotate(180deg)",
  },
});
