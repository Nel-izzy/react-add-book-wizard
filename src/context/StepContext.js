import { useState, createContext } from "react";
import App from "../App";

export const MultiStepContext = createContext();

const StepContext = () => {
  const [currentStep, setStep] = useState(1);
  const [genres, setGenres] = useState([]);
  const [subGenres, setSubGenres] = useState([]);
  const [finalData, setFinalData] = useState([]);
  const [addNewSubGenre, setAddNewSubGenre] = useState(false);
  const [bookInfo, setBookInfo] = useState([]);

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
          subGenres,
          setSubGenres,
          bookInfo,
          setBookInfo,
        }}
      >
        <App />
      </MultiStepContext.Provider>
    </div>
  );
};

export default StepContext;
