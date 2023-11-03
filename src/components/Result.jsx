import React from 'react'

const Result = (props) => {

    const PersonalizedMessage = (userScore,totalScore)=>{
        if(userScore==totalScore){
            return "Congratulations! You got a perfect score!";
        } else if (userScore >= totalScore / 2) {
            return `Great job! You scored ${userScore} out of ${totalScore}.`;
          } else {
            return `You scored ${userScore} out of ${totalScore}. Keep practicing!`;
          }
    }
  return (
    <div className='show-score'>
      {PersonalizedMessage(props.score,props.totalScore)}
    </div>
  )
}

export default Result