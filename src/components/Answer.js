import{useState} from "react"


export const Answer = ({answerText, index, selectedAnswer})=>{
    const letterCount = ['A', 'B', 'C', 'D']



    return<div className="anspointer"  onClick={()=>{selectedAnswer(answerText),selectAnswerHandler}}>
           <span>{letterCount[index]}</span><button  className="index">{answerText}{selectanswer}</button></div>
}