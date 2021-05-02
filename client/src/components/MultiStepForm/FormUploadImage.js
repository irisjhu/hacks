import React from "react";

import { Box, Button, Typography } from "@material-ui/core";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";

import useStyles from "./styles";

const FormUploadImage = (props) => {
  const classes = useStyles();
  const [image, setImage] = React.useState(null);
  const [fileName, setFileName] = React.useState("");

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
      setFileName(e.target.files[0].name);
    }
  };

  const handleSubmit = (e) => {
    if (image == null) {
      alert("No image selected!");
    } else {
      // TODO: upload image to database and proceed to next step if successful
      props.nextStep();
    }
  };

  return (
    <>
      <div className={`${classes.centerItems} ${classes.onlyTopBottomPadding}`}>
        <input
          accept="image/*"
          className={classes.input}
          type="file"
          id="contained-button-file"
          onChange={handleChange}
        />
        <label htmlFor="contained-button-file">
          <Button
            variant="contained"
            color="default"
            startIcon={<CloudUploadIcon />}
            component="span"
          >
            Upload
          </Button>
        </label>
        <span style={{ paddingLeft: "10px" }}>{fileName}</span>
      </div>
      <div className={`${classes.centerItems} ${classes.onlyTopBottomPadding}`}>
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </div>
    </>
  );
};

export default FormUploadImage;
