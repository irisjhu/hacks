import React from "react";

import { DialogContentText } from "@material-ui/core";

const Error = (props) => {
  return <DialogContentText>Error: {props.message}</DialogContentText>;
};

export default Error;
