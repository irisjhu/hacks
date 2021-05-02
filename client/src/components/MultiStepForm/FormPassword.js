import React from "react";

import { TextField, Container, Button } from "@material-ui/core";
import bcrypt from "bcryptjs";
import useStyles from "./styles";

const FormPassword = (props) => {
  const classes = useStyles();
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState(false);
  const [errorText, setErrorText] = React.useState("");
  const passwordHash =
    "$2a$10$obXGOVLBkXt6ufC3nLvk6Owwc8QoijPz3I9aAjKFdBu187FtCg48W";

  const submitPassword = (e) => {
    e.preventDefault();
    // TODO: store password hash in database and send api request to fetch
    if (bcrypt.compareSync(password, passwordHash)) {
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
