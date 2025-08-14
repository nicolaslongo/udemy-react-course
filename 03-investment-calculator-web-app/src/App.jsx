import { useState } from "react";
import Header from "./components/Header.jsx";
import UserInputGroup from "./components/UserInputGroup.jsx";
import Result from "./components/Result.jsx";

const DEFAULT_INPUT_VALUES = {
  initialInvestment: 15000,
  annualInvestment: 1200,
  expectedReturn: 6,
  duration: 10
}

function App() {
  const [inputValues, setInputValues] = useState(DEFAULT_INPUT_VALUES)

  const inputIsValid = inputValues.duration >= 1;
  
  function onSetInputValuesChange(id, newValue) {
    setInputValues(previousInputValues => {
      const newInputValues = {
        ...previousInputValues,
        [id]: parseInt(newValue, 10) // [id]: +newValue would have also worked to cast this string!
      };
      return newInputValues;
    });
  }

  return (
    <>
      <Header/>
      <main>
        <UserInputGroup inputValues={inputValues} onSetInputValues={onSetInputValuesChange}/>
        {!inputIsValid && <p className="center">Please enter a valid duration in years</p>}
        {inputIsValid && <Result inputValues={inputValues}/>}
      </main>
    </>
  )
}

export default App;