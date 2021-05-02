import { DialogContentText, Typography } from "@material-ui/core";
import React from "react";

const Error = (props) => {
  return <DialogContentText>Error: {props.message}</DialogContentText>;
};

export default Error;
