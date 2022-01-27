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
  const { setStep, setAddNewSubGenre, addNewSubGenre, setGenres, genres } =
    useContext(MultiStepContext);

  return (
    <div>
      <div>
        <FormLabel id="genre-radio-buttons-group-label">Genre</FormLabel>
        <RadioGroup
          row
          aria-labelledby="genre-radio-buttons-group-label"
          value={genres["subgenres"] ? genres["subgenres"]["name"] : ""}
          name="radio-buttons-group"
          onChange={(e) =>
            setGenres({
              ...genres,
              subgenres: { name: e.target.value },
            })
          }
        >
          <FormControlLabel
            value="Subgenre 1"
            control={<Radio />}
            label="Subgenre 1"
          />
          <FormControlLabel
            value="Subgenre 2"
            control={<Radio />}
            label="Subgenre 2"
          />
          <FormControlLabel
            value="Subgenre 3"
            control={<Radio />}
            label="Subgenre 3"
          />
          <FormControlLabel
            value="Subgenre 4"
            control={<Radio />}
            label="Subgenre 4"
          />

          <FormControlLabel
            value="Subgenre 5"
            control={<Radio />}
            label="Subgenre 5"
          />
          <FormControlLabel
            value="Subgenre 6"
            control={<Radio />}
            label="Subgenre 6"
          />
          <FormControlLabel
            value="Subgenre 7"
            control={<Radio />}
            label="Subgenre 7"
          />
        </RadioGroup>
        <Button variant="contained" onClick={() => setAddNewSubGenre(true)}>
          Add New Subgenre
        </Button>
      </div>
      <div style={{ marginTop: "10px" }}>
        <Button
          variant="contained"
          color="warning"
          onClick={() => setStep(1)}
          style={{ marginRight: "10px" }}
        >
          Back
        </Button>
        <Button
          variant="contained"
          color="success"
          onClick={() => {
            if (addNewSubGenre) {
              setStep(3);
            } else {
              genres["subgenres"]["name"] && setStep(3);
            }
          }}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default StepTwo;
