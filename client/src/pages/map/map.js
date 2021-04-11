import React from "react";
import useStyles from "./styles";
import { Typography } from "@material-ui/core";

const HacksMap = () => {
  const classes = useStyles();

  return (
    <div>
      <Typography className={classes.heading} variant="h1" align="center">
        hacksmap
      </Typography>
    </div>
  );
};

export default HacksMap;
