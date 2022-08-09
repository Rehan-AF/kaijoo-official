import { Button, withStyles } from "@material-ui/core";
const CustomButton = withStyles(() => ({
  root: {
    background:
      "transparent linear-gradient(180deg, #FF9315 0%, #FF6600 100%) 0% 0% no-repeat padding-box",
    boxShadow: "inset 0px 3px 6px #00000029",
    borderRadius: "12px",
    color: "#FFFFFF",
    fontWeight: "800",
    textTransform: "capitalize",
    padding: "5px 13px",
    fontSize: "16px",
  },
  primary: {
    background: "#FFFFFF",
  },
}))(Button);
export default CustomButton;
