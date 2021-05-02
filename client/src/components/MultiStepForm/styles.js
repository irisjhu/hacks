import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  rightAlign: {
    display: "flex",
    justifyContent: "flex-end",
  },
  onlyTopBottomPadding: {
    padding: "20px 0",
  },
  input: {
    display: "none",
  },
  centerItems: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));
