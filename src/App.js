import React, { useEffect, useState } from "react";
import "./App.css";
import Result from "./components/Result";
import QuestionBox from "./components/QuestionBox";
import questions from "./questions";

function App() {

  const [showResults, setShowResults] = useState(false);
  const [currentQues, setCurrentQues] = useState(0);
  const [score, setScore] = useState(0);
  const [theme, setTheme] = useState(true)
  const [themeNature, setThemeNature] = useState("🌚 Day")


  const ifAnswerCorrect = (isCorrect) => {
    if(isCorrect){
      setScore(score + 1);
    }

    if(currentQues + 1 < 5){
      setCurrentQues(currentQues + 1);
    }
    else{
      setShowResults(true);
    }
  };

  // const displayResults = (showResults) => {
  //   if (showResults) {
  //     <Result setScore={setScore} score={score} setCurrentQues={setCurrentQues} setShowResults={setShowResults} />
  //   } else {
  //     <QuestionBox questions={questions} ifAnswerCorrect={ifAnswerCorrect} currentQues={currentQues}/>
  //   }
  // }


  const changeTheme =() =>{
    setTheme(theme ? false : true);
  }

  function colorSet(color){
    document.body.style.backgroundColor = color ? "#161718" : "white";
    return{
      backgroundColor : color ? "#161718" : "white",
    }
  }

  function textColor(color){
    return{
      color:color ? "white" : "#161718",
    }
  }

  useEffect(()=>{
    setThemeNature(themeNature === "🌞 Night" ? "🌚 Day" : "🌞 Night")
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[theme])


  return (
      <div className="App" style={colorSet(theme)}>
        <div className="flex">
          <h2 style={textColor(theme)}>Quiz App</h2>
          <button className="themeChangeButton" onClick={changeTheme}>{themeNature}</button>
        </div>
      
        {
          showResults 
          ? <Result setScore={setScore} score={score} setCurrentQues={setCurrentQues} setShowResults={setShowResults} /> 
          : <QuestionBox questions={questions} ifAnswerCorrect={ifAnswerCorrect} currentQues={currentQues}/>
        }
       
      </div>

  );
}

export default App;