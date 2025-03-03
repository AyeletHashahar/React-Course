import UserInput from "./Components/UserInput.jsx"
import { useState } from "react";
import Results from "./Components/Results.jsx";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
  });
  
  function handleInput(inputIdentifier, newValue) {
    setUserInput(prevUserInput => {
        return {
            ...prevUserInput,
            [inputIdentifier]: +newValue
        };
    });
  }

  const inputIsValid = (userInput.duration > 0);

  return (
    <>
        <UserInput onChangeFunction={handleInput} userInput={userInput}/>
        {inputIsValid ? <Results userInput={userInput}/> : <p>Please enter a duration greater then zero.</p>}
    </>
  )
}

export default App
