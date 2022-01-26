import { useState, createContext } from "react";
import App from "../App";

export const MultiStepContext = createContext();

const StepContext = () => {
  const [currentStep, setStep] = useState(1);
  const [genres, setGenres] = useState([]);
  const [finalData, setFinalData] = useState([]);
  const [addNewSubGenre, setAddNewSubGenre] = useState(false);
  const [checked, setChecked] = useState(false);
  const [bookInfo, setBookInfo] = useState([]);

  const submitHandler = async (url, genres) => {
    const state = setFinalData({ ...bookInfo, genres });
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "Application/json",
      },
      body: JSON.stringify(state),
    });
    const resData = await response.json();
    console.log(resData);
  };

  const reset = () => {
    setStep(1);
    setGenres([]);
    setAddNewSubGenre(false);
    setChecked(false);
    setBookInfo([]);
  };

  return (
    <div>
      <MultiStepContext.Provider
        value={{
          currentStep,
          setStep,
          genres,
          setGenres,
          finalData,
          setFinalData,
          addNewSubGenre,
          setAddNewSubGenre,
          bookInfo,
          setBookInfo,
          checked,
          setChecked,
          submitHandler,
          reset,
        }}
      >
        <App />
      </MultiStepContext.Provider>
    </div>
  );
};

export default StepContext;
