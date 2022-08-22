import { withStyles, InputBase } from "@material-ui/core";
const CustomInputField = withStyles((theme) => ({
  root: {
    backgroundColor: "#FFFFFF 0% 0% no-repeat padding-box",
    border: "0.5px solid #707070",
    borderRadius: "6px",
    height: "93px",
    // position: "relative",
    color: "#222",
    fontSize: "14px",
    width: "362px",

    "&.Mui-focused": {
      borderColor: "#0364FF",
      transition: "0.5s ease",
    },
  },
}))(InputBase);
export default CustomInputField;
