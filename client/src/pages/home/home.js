import React from "react";
import { Typography, Box, Grid } from "@material-ui/core";

import useStyles from "./styles";

const Home = () => {
  const classes = useStyles();
  return (
    // <Box
    //   height="100vh"
    //   justifyContent="center"
    //   justifyItems="center"
    //   alignItems="center"
    //   flexDirection="column"
    //   className={classes.alignItemsAndJustifyContent}
    // >
    // </Box>
    <div
      style={{
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <Typography className={classes.heading} variant="h1" align="center">
        hacks
      </Typography>

      <Typography
        variant="h5"
        align="center"
        className={classes.alignItemsAndJustifyContent}
      >
        homies that are cool kids
      </Typography>
    </div>
  );
};

export default Home;
