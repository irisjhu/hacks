import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  card: {
    position: "relative",
  },
  cardMedia: {
    height: "100%",
  },
  overlayPic: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  },
  overlayText: {
    position: "absolute",
    top: "50%",
    left: "50%",
    color: "black",
    transform: "translate(-50%, -50%)",
  },
}));
