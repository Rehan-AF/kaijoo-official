import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import { useParams } from "react-router-dom";
import { Table1, Table2 } from "../../Components/table";
import WhatWeDo from "../../Components/whatWeDo";
import img from "../../assets/laptop.jpg";
import FilterSellerLevel from "../../Components/filterSeller";

const Seller = () => {
  const classes = useStyles();
  const { id } = useParams();
  return (
    <div>
      <div className={classes.home}>
        <div className={classes.subDiv}>
          <Typography>
            We are offering a full up-to-date list of stores from the most
            popular e-commerce marketplaces. Shoppers can browse through all
            store details and check their calculated Kaijoo™ score based on our
            internal algorithms and user reviews. Main advantage of our ranking
            system is that we are not limiting ourselves only to a single
            marketplace data, but instead we are collecting data from all
            available sources and warn consumers of any suspicious activity
            before they commit to buy any product.
          </Typography>
        </div>
      </div>
      <div>
        <FilterSellerLevel />
      </div>
      <div>
        <WhatWeDo />
      </div>
      <div className={classes.tableContainer}>
        <Table1 />
        <Table2 />
      </div>
    </div>
  );
};

export default Seller;
const useStyles = makeStyles((theme) => ({
  home: {
    background: `url(${img})`,
    color: "white",
    textAlign: "center",
    backgroundSize: "cover",
  },
  subDiv: {
    background: "#0D73FFD9 0% 0% no-repeat padding-box",
    padding: "34px 160px",
    [theme.breakpoints.down("sm")]: {
      padding: "34px 30px",
    },
  },
  tableContainer: {
    display: "flex",
    justifyContent: "space-between",
    padding: "0 160px 20px 160px",
    [theme.breakpoints.down("sm")]: {
      padding: "0 30px 20px 30px",
      flexWrap: "wrap",
      justifyContent: "center",
      alignItems: "flex-start",
    },
  },
}));
