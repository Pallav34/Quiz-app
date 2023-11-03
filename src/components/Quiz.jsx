import React, { useState } from 'react'
import { Questions as AllQuestions } from '../data/questions'
import Result from './Result';

const Quiz = () => {
  const [questionNumber, setQuestionNumber]=useState(0);
  const [selectedOption,setSelectedOption]=useState();
  const [userScore,setUserScore]=useState(0);
  const [showResult, setShowResult] = useState(false);

  

  const changeQuestion =()=>{
    updateScore();
    if(questionNumber<AllQuestions.length-1){
      setQuestionNumber(questionNumber+1);
      setSelectedOption();
    }else{
      setShowResult(true);
    }
  }
  const updateScore = ()=>{
    console.log(selectedOption)
    console.log(AllQuestions[questionNumber].answer)
    if(AllQuestions[questionNumber].options[selectedOption] === AllQuestions[questionNumber].answer){
      console.log(userScore);
      setUserScore(userScore+1);
    }
  }

  return (
    <div>
        <h2 className='heading'>Test Your Knowledge</h2>
        <div className="container">
          {showResult?(
            <Result score={userScore} totalScore={AllQuestions.length}/>
          ):(
          <>
          <div className='question-count'>
							<span>Question {questionNumber+ 1}</span>/{AllQuestions.length}
					</div>
            <div className="question">
                {AllQuestions[questionNumber].question}
            </div>
            <div className="option">
                {
                  AllQuestions[questionNumber].options.map((option,i)=>{
                    return(
                      <button
                      className={`option-btn ${
                        selectedOption == i?"checked":null
                    }`}
                      key={i}
                      onClick={()=>setSelectedOption(i)}
                      >{option}</button>
                    )
                  })
                }
            </div>
            <button type="button" className='next-btn' onClick={changeQuestion}>{`${questionNumber<AllQuestions.length-1 ? 'Next' : 'Submit'}`}</button>
            </>
)}
        </div>
    </div>
  )
}

export default Quiz