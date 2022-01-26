import React, { useContext } from "react";
import { Container, Step, StepLabel, Stepper } from "@mui/material";
import StepOne from "./components/StepOne";
import StepTwo from "./components/StepTwo";
import StepThree from "./components/StepThree";
import StepFour from "./components/StepFour";
import { MultiStepContext } from "./context/StepContext";
import Display from "./components/Display";

const App = () => {
  const { currentStep, addNewSubGenre } = useContext(MultiStepContext);

  function showStep(step) {
    switch (step) {
      case 1:
        return <StepOne />;
      case 2:
        return <StepTwo />;
      case 3:
        return addNewSubGenre ? <StepThree /> : <StepFour />;
      case 4:
        return <StepFour />;
      case 5:
        return <Display />;
    }
  }
  return (
    <Container>
      <h1> React Add Book Wizard</h1>

      <div>
        <Stepper activeStep={currentStep - 1} orientation="horizontal">
          <Step>
            <StepLabel>Genre</StepLabel>
          </Step>
          <Step>
            <StepLabel>Sub Genre</StepLabel>
          </Step>
          {addNewSubGenre && (
            <Step>
              <StepLabel>Add new subgenre</StepLabel>
            </Step>
          )}

          <Step>
            <StepLabel>Information</StepLabel>
          </Step>
        </Stepper>
      </div>
      {showStep(currentStep)}
    </Container>
  );
};

export default App;
