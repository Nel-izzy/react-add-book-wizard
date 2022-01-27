import { useContext } from "react";
import { TextField, Button, Checkbox } from "@mui/material";
import { MultiStepContext } from "../context/StepContext";
import React from "react";

const StepThree = () => {
  const { setStep, setAddNewSubGenre, genres, setGenres, checked, setChecked } =
    useContext(MultiStepContext);
  const { subgenres } = genres;
  return (
    <div style={{ marginTop: "20px" }}>
      <TextField
        variant="outlined"
        fullWidth
        label="Subgenre name"
        value={genres["subgenres"] ? genres["subgenres"][0]["name"] : ""}
        onChange={(e) => {
          setGenres({
            ...genres,
            ...subgenres,
            subgenres: [{ name: e.target.value }],
          });
          //setGenres({ ...genres, subgenres });
        }}
        // setGenres({
        //   ...genres,
        //   subgenres: [...genres["subgenres"], { name: e.target.value }],
        // })
      />
      <Checkbox
        onClick={() => setChecked(!checked)}
        checked={checked}
        onChange={(e) => {
          setGenres({
            ...genres,
            subgenres: [{ ...subgenres, isDescriptionRequired: !checked }],
          });
        }}
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
          onClick={(e) => {
            genres["subgenres"][0]["name"] && setStep(4);
          }}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default StepThree;
