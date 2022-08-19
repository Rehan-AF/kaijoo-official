import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";
import { Typography } from "@material-ui/core";

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 10,
    borderRadius: 5,
  },
  colorPrimary: {
    backgroundColor:
      theme.palette.grey[theme.palette.type === "light" ? 200 : 700],
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
  },
  progress: {
    width: 200,
    transform: "rotate(180deg)",
  },
});
