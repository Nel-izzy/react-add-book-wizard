import { useContext } from "react";
import { TextField, Button, Checkbox } from "@mui/material";
import { MultiStepContext } from "../context/StepContext";
import React from "react";

const StepThree = () => {
  const { setStep, setAddNewSubGenre, genres, setGenres, checked, setChecked } =
    useContext(MultiStepContext);
  return (
    <div style={{ marginTop: "20px" }}>
      <TextField
        variant="outlined"
        fullWidth
        label="Subgenre name"
        value=""
        onChange={(e) =>
          setGenres({ ...genres, subgenres: { name: e.target.value } })
        }
      />
      <Checkbox
        onClick={() => setChecked(!checked)}
        checked={checked}
        onChange={(e) =>
          setGenres({
            ...genres,
            subGenres: { isDescriptionRequired: !checked },
          })
        }
      />{" "}
      Description is required for this Subgenre
      <div style={{ marginTop: "10px" }}>
        <Button
          style={{ marginRight: "10px" }}
          variant="contained"
          color="warning"
          onClick={() => {
            setStep(2);
            setAddNewSubGenre(false);
          }}
        >
          Back
        </Button>
        <Button
          variant="contained"
          color="success"
          onClick={() => {
            genres["subgenres"]["name"] && setStep(4);
          }}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default StepThree;
