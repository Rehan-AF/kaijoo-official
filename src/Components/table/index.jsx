import React from "react";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import CancelIcon from "@material-ui/icons/Cancel";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import { makeStyles } from "@material-ui/core";
const Table = () => {
  const classes = useStyles();
  return (
    <table>
      <thead>
        <tr>
          <th>Packages</th>
          <th>Basic</th>
          <th>Advanced</th>
          <th>Premium</th>
        </tr>
      </thead>
      <tbody>
        <tr onclick="window.open('#','_blank')">
          <td>Personal Info</td>
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
          <td>Company Info</td>
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
          <td>Business Info</td>
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
          <td>Product Details</td>
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
          <td>Service Details</td>
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
          <td>Influencer / Blogger</td>
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
  );
};

export default Table;
const useStyles = makeStyles(() => ({}));
