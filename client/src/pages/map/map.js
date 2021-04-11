import React from "react";
import useStyles from "./styles";
import { Typography, Box } from "@material-ui/core";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

const HacksMap = () => {
  const classes = useStyles();

  // url to a valid topojson file
  const geoUrl =
    "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

  return (
    <div
      style={{
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
      }}>
    <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1vyEfSFG-cKtal4MefLpqdoKX1vwm8nju" width="640" height="480"></iframe>
  </div>
);
};

export default HacksMap;
