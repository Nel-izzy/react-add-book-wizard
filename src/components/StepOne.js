import React, { useContext } from "react";
import {
  Button,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormLabel,
} from "@mui/material";
import { MultiStepContext } from "../context/StepContext";

const StepOne = () => {
  const { setStep, setAddNewSubGenre, addNewSubGenre, genres, setGenres } =
    useContext(MultiStepContext);
  return (
    <div>
      <FormLabel id="demo-radio-buttons-group-label">Genre</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-radio-buttons-group-label"
        value={genres["name"]}
        name="radio-buttons-group"
        onChange={(e) => setGenres({ ...genres, name: e.target.value })}
      >
        <FormControlLabel value="Genre 1" control={<Radio />} label="Genre 1" />
        <FormControlLabel value="Genre 2" control={<Radio />} label="Genre 2" />
        <FormControlLabel value="Genre 3" control={<Radio />} label="Genre 3" />
        <FormControlLabel value="Genre 4" control={<Radio />} label="Genre 4" />

        <FormControlLabel value="Genre 5" control={<Radio />} label="Genre 5" />
        <FormControlLabel value="Genre 6" control={<Radio />} label="Genre 6" />
        <FormControlLabel value="Genre 7" control={<Radio />} label="Genre 7" />
        <FormControlLabel value="Genre 8" control={<Radio />} label="Genre 8" />
      </RadioGroup>

      <div>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            genres["name"] && setStep(2);
            addNewSubGenre && setAddNewSubGenre(false);
          }}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default StepOne;
