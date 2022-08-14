import { makeStyles, Typography } from "@material-ui/core";
import React, { useEffect, useMemo, useState } from "react";
import Dropdown from "../dropdown";
import SellerCard from "../sellerCard";
import data from "./items";
const FilterSellerLevel = ({ id }) => {
  const classes = useStyles();
  const [filterValue, setFilterValue] = useState([`${id}`]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    setFilteredData(data);
  }, []);
  function getFilteredList() {
    // Avoid filter when selectedCategory is null
    if (!filterValue) {
      return filteredData;
    }
    return filteredData.filter((item) => item.level == filterValue);
  }
  console.log(filterValue);
  var filteredList = useMemo(getFilteredList, [filterValue, filteredData]);
  return (
    <div className={classes.container}>
      <div className={classes.head}>
        <Typography className={classes.typo}>Filter</Typography>
        <Dropdown id={id} setFilterValue={setFilterValue} />
      </div>
      <div className={classes.cardContainer}>
        {filteredList?.map(({ level, sellerName, Description }, index) => (
          <SellerCard
            key={index}
            level={level}
            SellerName={sellerName}
            Description={Description}
          />
        ))}
      </div>
    </div>
  );
};

export default FilterSellerLevel;
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
  cardContainer: {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
  },
}));
