import { makeStyles, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Dropdown from "../dropdown";
import SellerCard from "../sellerCard";
import data from "./items";
const FilterReview = ({ id }) => {
  const classes = useStyles();
  const [filterValue, setFilterValue] = useState([parseInt(id)]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    setFilterValue([parseInt(id)]);
  }, [id]);

  useEffect(() => {
    function getFilteredList() {
      // Avoid filter when selectedCategory is null
      if (!filterValue.length) return setFilteredData([...data]);

      setFilteredData(
        data.filter((item) => filterValue.includes(parseInt(item.level)))
      );
    }
    getFilteredList();
  }, [filterValue]);

  return (
    <div className={classes.container}>
      <div className={classes.head}>
        <Typography className={classes.typo}>Filter</Typography>
        <Dropdown id={id} setFilterValue={setFilterValue} />
      </div>
      <br />
      <div className={classes.cardContainer}>
        {filteredData.map(({ level, sellerName, Description }, index) => (
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

export default FilterReview;
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
