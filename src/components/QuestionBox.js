import React,{useRef} from 'react';

function QuestionBox({questions, ifAnswerCorrect, currentQues}) {

  const highlightQuestion = useRef();

  return (      
      <div className="Question">
        <span>Question: {currentQues + 1} out of 5</span>
        <h3 ref={highlightQuestion} className="text">{questions[currentQues].text}</h3>
        <ul>
          {questions[currentQues].options.map((option) => {
            return (
              <li key={option.id} onClick={() => ifAnswerCorrect(option.isCorrect)}>
                {option.text}
              </li>
            )
          })}
        </ul>

        <div className='buttons'>
        
            <button onClick={function highlight(){
              highlightQuestion.current.style.color = "#EB455F";
            }}>
              Highlight 
            </button>

            <button onClick={function removeHighlight(){
              highlightQuestion.current.style.color = "orangered";
            }}>
              Remove Highlight
            </button>

        </div>
    </div>
  )
}

export default QuestionBox