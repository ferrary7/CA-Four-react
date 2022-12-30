import React from 'react'

function Result({setScore, score, setCurrentQues, setShowResults}) {
  
  const restartQuiz = () => {
    setScore(0);
    setCurrentQues(0);
    setShowResults(false);
  };

  return (
    <div className="Result">
      <h1>Final Results</h1>
      <h2>
        {score} out of 5 correct - ({(score*100)/5}%)
      </h2>
      <button onClick={() => restartQuiz()}>Restart game 🔄️</button>
  </div>
  )
}

export default Result