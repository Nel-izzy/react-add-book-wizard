import React, { useContext } from "react";
import {
  Button,
  Grid,
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
        <FormControlLabel value="Genre 1" control={<Radio />} label="Genre1" />
        <FormControlLabel value="Genre2" control={<Radio />} label="Genre2" />
        <FormControlLabel value="Genre3" control={<Radio />} label="Genre3" />
        <FormControlLabel value="Genre4" control={<Radio />} label="Genre4" />

        <FormControlLabel value="Genre5" control={<Radio />} label="Genre5" />
        <FormControlLabel value="Genre6" control={<Radio />} label="Genre6" />
        <FormControlLabel value="Genre7" control={<Radio />} label="Genre7" />
        <FormControlLabel value="Genre8" control={<Radio />} label="Genre8" />
      </RadioGroup>

      <div>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            setStep(2);
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
