import React, { useEffect } from "react";

import { Button, Input, InputLabel } from "@material-ui/core";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import { useDispatch, useSelector } from "react-redux";

import useStyles from "./styles";
import { uploadImage } from "../../actions/images";
import { clearErrors } from "../../actions/errors";

const FormUploadImage = (props) => {
  const classes = useStyles();
  const [image, setImage] = React.useState(null);
  const [fileName, setFileName] = React.useState("");
  const dispatch = useDispatch();
  const errors = useSelector((state) => state.errors);
  const images = props.images;
  const [submitted, setSubmitted] = React.useState(false);
  const uploadActionFunc = props.uploadActionFunc;

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
      setFileName(e.target.files[0].name);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (image == null) {
      alert("No image selected!");
    } else {
      dispatch(uploadActionFunc(image));
      setSubmitted(true);
    }
  };

  useEffect(() => {
    if (errors && errors.upload_error) {
      setSubmitted(false);
      alert(errors.upload_error);
      dispatch(clearErrors());
    }
  }, [errors]);

  useEffect(() => {
    if (submitted) {
      props.nextStep();
    }
  }, [images]);

  return (
    <form onSubmit={handleSubmit} method="post" encType="multipart/form-data">
      <div className={`${classes.centerItems} ${classes.onlyTopBottomPadding}`}>
        <Input
          accept="image/*"
          className={classes.input}
          type="file"
          id="contained-button-file"
          onChange={handleChange}
          name="image"
        />
        <InputLabel htmlFor="contained-button-file">
          <Button
            variant="contained"
            color="default"
            startIcon={<CloudUploadIcon />}
            component="span"
          >
            Upload
          </Button>
        </InputLabel>
        {fileName && <span style={{ paddingLeft: "10px" }}>{fileName}</span>}
      </div>
      <div className={`${classes.centerItems} ${classes.onlyTopBottomPadding}`}>
        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </div>
    </form>
  );
};

export default FormUploadImage;
