import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import img from "../../assets/laptop.jpg";
import levels from "../../assets/levels.png";
import Categories from "../../Components/categories";
import WhatWeDo from "../../Components/whatWeDo";
import { Table1, Table2 } from "../../Components/table";

const Home = () => {
  const classes = useStyles();
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
      <div className={classes.sndDiv}>
        <Typography>
          Hey! Looking for something exciting and trustable? Click now to view
          our certified sellers.
        </Typography>
        <div>
          <img src={levels} alt="level 1, level 2, level 3" />
        </div>
      </div>
      <div>
        <Categories />
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

export default Home;
const useStyles = makeStyles(() => ({
  home: {
    background: `url(${img})`,
    color: "white",
    textAlign: "center",
    backgroundSize: "cover",
  },
  subDiv: {
    background: "#0D73FFD9 0% 0% no-repeat padding-box",
    padding: "34px 160px",
  },
  sndDiv: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: "20px 0",
    boxShadow: "0px 3px 6px #00000029",
    marginBottom: "20px",
  },
  tableContainer: {
    display: "flex",
    justifyContent: "space-between",
    padding: "0 160px 20px 160px",
  },
}));
