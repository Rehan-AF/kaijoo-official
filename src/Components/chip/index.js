import { Chip, withStyles } from "@material-ui/core";
const CustomChip = withStyles(() => ({
  root: {
    background:
      "transparent linear-gradient(180deg, #5AA0FFF7 0%, #006CFF 100%) 0% 0% no-repeat padding-box",
    borderadius: " 18px",

    "&:hover": {
      background: "#4292FF 0% 0% no-repeat padding-box",
    },
  },
  primary: {
    background:
      "transparent linear-gradient(180deg, #5AA0FFF7 0%, #006CFF 100%) 0% 0% no-repeat padding-box",
    borderRadius: "26px",
    padding: "30px 70px",
    width: "200px",
    marginTop: "20px",
    "&:hover": {
      background: "#4292FF 0% 0% no-repeat padding-box",
    },
  },
}))(Chip);
export default CustomChip;
