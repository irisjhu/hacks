import React from "react";

import { DialogContentText } from "@material-ui/core";

const Success = (props) => {
  return <DialogContentText>{props.message}</DialogContentText>;
};

export default Success;
