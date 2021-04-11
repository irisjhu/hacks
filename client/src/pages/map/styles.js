import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  heading: {
    fontFamily: "IBM Plex Mono",
    strokeLinecap: "round",
    strokeWidth: 2,
  },
  alignItemsAndJustifyContent: {
    flexDirection: "column",
    alignItems: "center",
    justify: "center",
  },
}));
