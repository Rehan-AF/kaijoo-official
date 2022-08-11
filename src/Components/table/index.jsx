import React from "react";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import CancelIcon from "@material-ui/icons/Cancel";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import { makeStyles, Typography } from "@material-ui/core";
export const Table1 = () => {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <Typography className={classes.typo}>
        Seller Audit Packages (Audit Service)
      </Typography>
      <table className={classes.table} cellspacing="0" cellpadding="0">
        <thead>
          <tr>
            <th className={classes.tHead}>Packages</th>
            <th className={classes.tHead}>Basic</th>
            <th className={classes.tHead}>Advanced</th>
            <th className={classes.tHead}>Premium</th>
          </tr>
        </thead>
        <tbody>
          <tr onclick="window.open('#','_blank')">
            <td className={classes.name}>Personal Info</td>
            <td>
              <CheckCircleIcon className={classes.green} />
            </td>
            <td>
              <CheckCircleIcon className={classes.green} />
            </td>
            <td>
              <CheckCircleIcon className={classes.green} />
            </td>
          </tr>
          {/*  */}
          <tr>
            <td className={classes.name}>Company Info</td>
            <td>
              <CheckCircleIcon className={classes.green} />
            </td>
            <td>
              <CheckCircleIcon className={classes.green} />
            </td>
            <td>
              <CheckCircleIcon className={classes.green} />
            </td>
          </tr>
          {/*  */}
          <tr>
            <td className={classes.name}>Business Info</td>
            <td>
              <CheckCircleIcon className={classes.green} />
            </td>
            <td>
              <CheckCircleIcon className={classes.green} />
            </td>
            <td>
              <CheckCircleIcon className={classes.green} />
            </td>
          </tr>
          {/*  */}
          <tr>
            <td className={classes.name}>Product Details</td>
            <td>
              <CancelIcon className={classes.red} />
            </td>
            <td>
              <CheckCircleIcon className={classes.green} />
            </td>
            <td>
              <CheckCircleIcon className={classes.green} />
              <CheckCircleIcon className={classes.green} />
            </td>
          </tr>
          {/*  */}
          <tr>
            <td className={classes.name}>Service Details</td>
            <td>
              <CancelIcon className={classes.red} />
            </td>
            <td>
              <CancelIcon className={classes.red} />
            </td>
            <td>
              <CheckCircleIcon className={classes.green} />
            </td>
          </tr>
          {/*  */}
          <tr>
            <td className={classes.name}>Influencer / Blogger</td>
            <td>
              <AddCircleIcon className={classes.orange} />
            </td>
            <td>
              <AddCircleIcon className={classes.orange} />
            </td>
            <td>
              <AddCircleIcon className={classes.orange} />
            </td>
          </tr>
          {/*  */}
        </tbody>
      </table>
    </div>
  );
};
export const Table2 = () => {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <Typography className={classes.typo}>
        Seller Audit Packages (Audit Service)
      </Typography>
      <table className={classes.table} cellspacing="0" cellpadding="0">
        <thead>
          <tr>
            <th className={classes.tHead}>Packages</th>
            <th className={classes.tHead}>Basic</th>
            <th className={classes.tHead}>Advanced</th>
            <th className={classes.tHead}>Premium</th>
          </tr>
        </thead>
        <tbody>
          <tr onclick="window.open('#','_blank')">
            <td className={classes.name}>Seller Insights</td>
            <td>
              <CheckCircleIcon className={classes.green} />
            </td>
            <td>
              <CheckCircleIcon className={classes.green} />
            </td>
            <td>
              <CheckCircleIcon className={classes.green} />
            </td>
          </tr>
          {/*  */}
          <tr>
            <td className={classes.name}>Product Insights</td>
            <td>
              <CancelIcon className={classes.red} />
            </td>
            <td>
              <CheckCircleIcon className={classes.green} />
            </td>
            <td>
              <CheckCircleIcon className={classes.green} />
            </td>
          </tr>
          {/*  */}
          <tr>
            <td className={classes.name}>Service Insights</td>
            <td>
              <CancelIcon className={classes.red} />
            </td>
            <td>
              <CancelIcon className={classes.red} />
            </td>
            <td>
              <CheckCircleIcon className={classes.green} />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
const useStyles = makeStyles(() => ({
  main: {
    marginTop: "10px",
    "& table, th, td": {
      border: "1px white solid",
    },
    "& td": {
      padding: "5px 10px",
    },
  },
  typo: {
    marginBottom: "10px",
    textAlign: "center",
    color: "#006CFF",
    fontSize: "20px",
  },
  tHead: {
    background:
      "transparent linear-gradient(180deg, #FF9315 0%, #FF6600 100%) 0% 0% no-repeat padding-box",
    border: "1px solid #FFFFFF",
    padding: "8px 10px",
    color: "white",
    width: "171px",
  },
  table: {
    background: "#ebebeb",
    textAlign: "center",
  },
  name: {
    fontSize: "12px",
  },
  green: {
    fontSize: "16px",
    color: "green",
  },
  red: {
    fontSize: "16px",
    color: "#d30505",
  },
  orange: {
    fontSize: "16px",
    color: "#ff8503",
  },
}));
