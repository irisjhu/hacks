import React from "react";

import { TextField, Container, Button } from "@material-ui/core";
import { sha256 } from "js-sha256";
import useStyles from "./styles";

const FormPassword = (props) => {
  const classes = useStyles();
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState(false);
  const [errorText, setErrorText] = React.useState("");
  const passwordHash =
    "54aaf480698139c2b85a60d50a6eefd6d40e72b42c9462a02e5c856f8bacc109";

  const submitPassword = (e) => {
    e.preventDefault();
    // TODO: store password hash in database and send api request to fetch
    const hash = sha256(password);
    if (hash === passwordHash) {
      props.nextStep();
    } else {
      setError(true);
      setErrorText("Incorrect password");
    }
  };

  const handleChange = (e) => {
    setError(false);
    setErrorText("");
    setPassword(e.target.value);
  };

  return (
    <div>
      <TextField
        autoFocus
        fullWidth
        label="Password"
        type="password"
        variant="outlined"
        value={password}
        onChange={handleChange}
        error={error}
        helperText={errorText}
      ></TextField>
      <Container
        className={`${classes.rightAlign} ${classes.onlyTopBottomPadding}`}
      >
        <Button variant="contained" color="primary" onClick={submitPassword}>
          Submit
        </Button>
      </Container>
    </div>
  );
};

export default FormPassword;
