import { DialogContentText, Typography } from "@material-ui/core";
import React from "react";

const Success = (props) => {
  return <DialogContentText>{props.message}</DialogContentText>;
};

export default Success;
