import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    fontFamily: "Roboto",
    height: "100vh",
  },
  title: {
    flexGrow: 1,
  },
  navDisplayFlex: {
    display: "flex",
    justifyContent: "space-between",
    minHeight: "100%",
  },
  linkText: {
    textDecoration: "none",
    color: "black",
  },
  navbarDisplayFlex: {
    display: `flex`,
    justifyContent: `space-between`,
  },
}));
