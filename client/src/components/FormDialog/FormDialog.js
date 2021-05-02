import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
} from "@material-ui/core";
import React from "react";
import CloseIcon from "@material-ui/icons/Close";

import useStyles from "./styles";

const FormDialog = (props) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        {props.buttonText}
      </Button>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
        <DialogTitle disableTypography>
          <Typography variant="h6">{props.title}</Typography>
          <IconButton className={classes.closeButton} onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>{props.content}</DialogContent>
      </Dialog>
    </div>
  );
};

export default FormDialog;
