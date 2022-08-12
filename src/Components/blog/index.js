import React, { useState } from "react";
import Pagination from "@material-ui/lab/Pagination";
import NewsCard from "../newsCard";
import { makeStyles } from "@material-ui/core";

const Blog = () => {
  const classes = useStyles();
  const [pageNo, setPageNo] = useState(1);
  const handleChange = (e, page) => {
    setPageNo(page);
    console.log(page, "page");
  };
  return (
    <div className={classes.container}>
      <Pagination
        defaultPage={1}
        page={pageNo}
        count={10}
        variant="outlined"
        shape="rounded"
        onChange={handleChange}
      />
      <div className={classes.cardContainer}>
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </div>
      <Pagination
        defaultPage={1}
        page={pageNo}
        count={10}
        variant="outlined"
        shape="rounded"
        onChange={handleChange}
      />
    </div>
  );
};

export default Blog;
const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    gap: "20px",
    marginBottom: "20px",
  },
  cardContainer: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    gap: "20px",
  },
}));
