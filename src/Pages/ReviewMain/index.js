import React, { useEffect } from "react";
import DropdownReUse from "../../Components/dropDownResuse";
import { Typography, makeStyles, Chip } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";

const ReviewMain = () => {
  const classes = useStyles();

  const handleDelete = () => {
    console.info("You clicked the delete icon.");
  };

  const {
    chipDataSlicer: { data },
  } = useSelector((state) => state);

  useEffect(() => {}, [data]);

  return (
    <>
      <div className={classes.container}>
        <div className={classes.head}>
          <Typography className={classes.typo}>Filter</Typography>
          <DropdownReUse label="Plateform" />
          <DropdownReUse label="Countries" />
          <DropdownReUse label="Ratings" />
          <DropdownReUse label="Catagories" />
        </div>
        <div className={classes.body}>
          <div className={classes.leftSide}>
            {data.map((item) => {
              return (
                <div className={classes.chipList}>
                  <Chip
                    size="large"
                    label={item}
                    onDelete={handleDelete}
                    color="primary"
                    className={classes.chip}
                  />
                </div>
              );
            })}
          </div>
          <div className={classes.rightSide}></div>
        </div>
      </div>
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  container: {
    padding: "40px 160px",
    [theme.breakpoints.down("sm")]: {
      padding: "20px 30px",
    },
  },
  head: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
  },
  typo: {
    fontWeight: "bold",
  },
  body: {
    display: "flex",
    flexDirection: "column",
    gap: "30px",
  },
  leftSide: {
    padding: "1em",
    width: "200px",
  },
  chipList: {
    display: "flex",
    flexDirection: "column",
    gap: "30px",
    paddingBottom: "1em",
  },
}));

export default ReviewMain;
