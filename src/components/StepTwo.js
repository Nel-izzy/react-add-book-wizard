import React, { useContext } from "react";
import { MultiStepContext } from "../context/StepContext";
import {
  Button,
  FormControlLabel,
  Radio,
  RadioGroup,
  FormLabel,
} from "@mui/material";

const StepTwo = () => {
  const { setStep, setAddNewSubGenre, setSubGenres, subGenres } =
    useContext(MultiStepContext);
  return (
    <div>
      <FormLabel id="genre-radio-buttons-group-label">Genre</FormLabel>
      <RadioGroup
        row
        aria-labelledby="genre-radio-buttons-group-label"
        value={subGenres["name"]}
        name="radio-buttons-group"
        onChange={(e) => setSubGenres({ ...subGenres, name: e.target.value })}
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
      <Button onClick={() => setAddNewSubGenre(true)}>Add New Subgenre</Button>
      <Button variant="contained" color="warning" onClick={() => setStep(1)}>
        Back
      </Button>
      <Button variant="contained" color="success" onClick={() => setStep(3)}>
        Next
      </Button>
    </div>
  );
};

export default StepTwo;
