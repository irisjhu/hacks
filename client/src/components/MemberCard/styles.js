import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  card: {
    position: "relative",
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
  // fadeOut: {
  //   opacity: 0,
  //   width: 0,
  //   height: 0,
  //   transition: "width 0.5s 0.5s, height 0.5s 0.5s, opacity 0.5s",
  // },
  // fadeIn: {
  //   opacity: 1,
  //   width: "100px",
  //   height: "100px",
  //   transition: "width 0.5s, height 0.5s, opacity 0.5s 0.5s",
  // },
}));
