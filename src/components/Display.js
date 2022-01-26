import { Button, Box } from "@mui/material";
import React, { useContext } from "react";
import { MultiStepContext } from "../context/StepContext";
import CheckIcon from "@mui/icons-material/CheckCircle";

const Display = () => {
  const { reset } = useContext(MultiStepContext);
  return (
    <div style={{ marginTop: "80px" }}>
      <Box
        sx={{
          width: 500,
          height: 350,
          border: "1px solid grey",
          margin: "0 auto",
        }}
      >
        <div>
          <CheckIcon
            sx={{
              width: 180,
              height: 140,
              margin: "50px 0 0 170px",
              color: "#ccc",
            }}
          />
        </div>
        <p style={{ margin: "10px 0 0 170px" }}>Book Added Successfully</p>
        <Button
          variant="contained"
          color="primary"
          onClick={reset}
          style={{ margin: "20px 0 0 170px" }}
        >
          Add Another Book
        </Button>
      </Box>
    </div>
  );
};

export default Display;
