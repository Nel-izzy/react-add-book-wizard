import { useState, createContext } from "react";
import App from "../App";

export const MultiStepContext = createContext();

const StepContext = () => {
  const [currentStep, setStep] = useState(1);
  const [genres, setGenres] = useState([]);
  //const [subGenres, setSubGenres] = useState([]);
  const [finalData, setFinalData] = useState([]);
  const [addNewSubGenre, setAddNewSubGenre] = useState(false);
  const [checked, setChecked] = useState(false);
  const [bookInfo, setBookInfo] = useState([]);

  const submitHandler = () => {
    setFinalData({ ...bookInfo, genres });
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
        }}
      >
        <App />
      </MultiStepContext.Provider>
    </div>
  );
};

export default StepContext;
