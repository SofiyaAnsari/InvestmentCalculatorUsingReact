import Header from "./components/Header.jsx"
import Results from "./components/Results.jsx";
import UserInput from "./components/UserInput.jsx"
import { useState } from "react";
function App() {
  const[userInput,setUserInput]= useState({
    initialInvestment:10000,
    annualInvestment:1200,
    expectedReturn:6,
    duration:10
});
function handleChange(inputIdentifier,newValue){
  setUserInput(prevUserInput=>{
      return{
          ...prevUserInput,
          //we are putting a + in front of newValur to change the input from string to number
          [inputIdentifier]:+newValue
      }
  })
      }

      const inputIsValid=userInput.duration>=1;
  return (
    <>
 
    <Header />
    <UserInput onChange={handleChange} userInput={userInput}/>
 
 {!inputIsValid && <p className="center">Duration should be greater than zero </p>}
 {inputIsValid &&   <Results input={userInput}/>}
    </>
  
  )
}

export default App
