import React, { useEffect, useState } from "react";
import DropdownReUse from "../../Components/dropDownResuse";
import { Typography, makeStyles, Chip } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import CustomChip from "../../Components/chip";
import { removeData } from "../../features/chipDataSlicer/chipDataslicer";
import { ReviewCard } from "../../Components/reviewCard";

const ReviewMain = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const {
    chipDataSlicer: { data },
  } = useSelector((state) => state);
  const [chipData, setChipData] = useState(data);

  const handleDelete = (chipToDelete) => () => {
    // console.info("You clicked the delete icon.", chipToDelete);
    // setChipData(chipData.filter((chip) => chip !== chipToDelete));
    // console.log(data, "data");
    dispatch(removeData(chipToDelete));
  };

  useEffect(() => {
    setChipData(data);
  }, [data]);

  console.log(data, "data");
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
            {chipData.map((item) => {
              return (
                <div className={classes.chipList}>
                  <CustomChip
                    size="large"
                    label={item}
                    onDelete={handleDelete(item)}
                    color="primary"
                    className={classes.chip}
                  />
                </div>
              );
            })}
          </div>
          <div className={classes.rightSide}></div>
        </div>
        <div>
          <ReviewCard />
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
    // display: "flex",
    // flexDirection: "column",
    gap: "30px",
    paddingBottom: "1em",
  },
}));

export default ReviewMain;
