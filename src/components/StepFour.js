import React, { useContext } from "react";
import { MultiStepContext } from "../context/StepContext";
import {
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";

const StepFour = () => {
  const { setStep, addNewSubGenre, bookInfo, setBookInfo, submitHandler } =
    useContext(MultiStepContext);

  const handleChange = (e) =>
    setBookInfo({ ...bookInfo, [e.target.name]: e.target.value });

  return (
    <div>
      <div style={{ marginTop: "10px" }}>
        <TextField
          variant="outlined"
          fullWidth
          value={bookInfo["title"]}
          label="Book Title"
          name="title"
          onChange={handleChange}
        />
      </div>
      <div style={{ marginTop: "10px" }}>
        <FormControl fullWidth>
          <InputLabel id="author">Author</InputLabel>
          <Select
            labelId="author-label"
            id="author"
            label="author-label"
            name="author"
            value={bookInfo["author"]}
            onChange={handleChange}
          >
            <MenuItem value="Author 1">Author 1</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div style={{ marginTop: "10px" }}>
        <TextField
          variant="outlined"
          fullWidth
          label="ISBN"
          name="isbn"
          value={bookInfo["isbn"]}
          onChange={handleChange}
        />
      </div>
      <div style={{ marginTop: "10px" }}>
        <FormControl fullWidth>
          <InputLabel id="publisher">Publisher </InputLabel>
          <Select
            labelId="publisher-label"
            id="publisher"
            label="publisher-label"
            name="publisher"
            value={bookInfo["publisher"]}
            onChange={handleChange}
          >
            <MenuItem value="Publisher 1">Publisher 1</MenuItem>
          </Select>
        </FormControl>
      </div>

      <div style={{ marginTop: "10px" }}>
        <TextField
          variant="outlined"
          label="Date Published"
          name="datePublished"
          placeholder="DD/MM/YYYY"
          value={bookInfo["datePublished"]}
          onChange={handleChange}
        />
      </div>
      <div style={{ marginTop: "10px" }}>
        <TextField
          variant="outlined"
          label="Number of Pages"
          name="numberOfPages"
          value={bookInfo["numberOfPages"]}
          onChange={handleChange}
        />
      </div>
      <div style={{ marginTop: "10px" }}>
        <FormControl style={{ width: "225px" }}>
          <InputLabel id="format">Format</InputLabel>
          <Select
            labelId="format-label"
            id="format"
            label="Format"
            name="format"
            value={bookInfo["format"]}
            onChange={handleChange}
          >
            <MenuItem value="Format 1">Format 1</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div style={{ marginTop: "10px" }}>
        <FormControl style={{ marginRight: "10px" }}>
          <TextField
            variant="outlined"
            label="Edition"
            value={bookInfo["edition"]}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl style={{ width: "225px" }}>
          <InputLabel id="Edition-Language">Edition Language</InputLabel>
          <Select
            labelId="edition-language-label"
            id="Edition-Language"
            label="edition-language-label"
            name="editionLanguage"
            value={bookInfo["editionLanguage"]}
            onChange={handleChange}
          >
            <MenuItem value="Spanish">Spanish</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div style={{ marginTop: "10px" }}>
        <TextField
          variant="outlined"
          label="Description"
          fullWidth
          multiline
          rows={4}
          name="description"
          value={bookInfo["description"]}
          onChange={handleChange}
        />
      </div>

      <div style={{ marginTop: "10px" }}>
        <Button
          variant="contained"
          color="warning"
          onClick={() => {
            addNewSubGenre ? setStep(3) : setStep(2);
            //setAddNewSubGenre(false);
          }}
        >
          Back
        </Button>
        <Button
          variant="contained"
          color="success"
          onClick={() => submitHandler()}
        >
          Complete
        </Button>
      </div>
    </div>
  );
};

export default StepFour;
