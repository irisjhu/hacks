import React from "react";
import useStyles from "./styles";
import { Container } from "@material-ui/core";

const HacksMap = () => {
  const classes = useStyles();

  return (
    <Container className={classes.elongateContainerAndCenterItems}>
      <iframe
        src="https://www.google.com/maps/d/u/0/embed?mid=1vyEfSFG-cKtal4MefLpqdoKX1vwm8nju"
        width="80%"
        height="80%"
      ></iframe>
    </Container>
  );
};

export default HacksMap;
