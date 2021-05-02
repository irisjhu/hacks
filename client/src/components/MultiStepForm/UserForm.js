import React from "react";
import Error from "./Error";
import FormPassword from "./FormPassword";
import FormUploadImage from "./FormUploadImage";
import Success from "./Success";

const UserForm = () => {
  const [step, setStep] = React.useState(2);
  const [errorMessage, setErrorMessage] = React.useState("");

  const nextStep = () => {
    setStep(step + 1);
  };

  const errorOut = (errorMessage) => {
    setStep(-1);
    setErrorMessage(errorMessage);
  };

  const handleChange = (input) => (e) => {};

  switch (step) {
    case 1:
      return <FormPassword nextStep={nextStep} errorOut={errorOut} />;
    case 2:
      return <FormUploadImage nextStep={nextStep} errorOut={errorOut} />;
    case -1:
      return <Error message={errorMessage} />;
    case 3:
      return <Success message="Image successfully uploaded!" />;
  }
};

export default UserForm;
