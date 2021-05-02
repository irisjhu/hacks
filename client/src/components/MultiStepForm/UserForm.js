import React from "react";
import Error from "./Error";
import FormPassword from "./FormPassword";
import FormUploadImage from "./FormUploadImage";
import Success from "./Success";

const UserForm = (props) => {
  const [step, setStep] = React.useState(1);
  const [errorMessage, setErrorMessage] = React.useState("");

  const nextStep = () => {
    setStep(step + 1);
  };

  const errorOut = (errorMessage) => {
    setStep(-1);
    setErrorMessage(errorMessage);
  };

  switch (step) {
    case 1:
      return <FormPassword nextStep={nextStep} />;
    case 2:
      return (
        <FormUploadImage
          nextStep={nextStep}
          errorOut={errorOut}
          uploadActionFunc={props.uploadActionFunc}
          images={props.images}
        />
      );
    case 3:
      return <Success message="Image successfully uploaded!" />;
    case -1:
      return <Error message={errorMessage} />;
    default:
      return <Error message={"You should not be here @_@"} />;
  }
};

export default UserForm;
