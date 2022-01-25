import { useContext } from "react";
import { TextField, Button, Checkbox } from "@mui/material";
import { MultiStepContext } from "../context/StepContext";
import React from "react";

const StepThree = () => {
  const { setStep, setAddNewSubGenre, genres, setGenres } =
    useContext(MultiStepContext);
  return (
    <div style={{ marginTop: "20px" }}>
      <TextField
        variant="outlined"
        fullWidth
        label="Subgenre name"
        value={genres["subgenres"]["description"] || ""}
        onChange={(e) =>
          setGenres({
            ...genres,
            subgenres: [
              ...genres["subgenres"],
              { description: e.target.value },
            ],
          })
        }
      />
      <Checkbox /> Description is required for this Subgenre
      <div>
        <Button
          variant="contained"
          color="warning"
          onClick={() => {
            setStep(2);
            setAddNewSubGenre(false);
          }}
        >
          Back
        </Button>
        <Button variant="contained" color="success" onClick={() => setStep(4)}>
          Next
        </Button>
      </div>
    </div>
  );
};

export default StepThree;
