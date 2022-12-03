import { useContext } from "react"
import { QuizContext } from "../context/QuizContext"
import { Answer } from "./Answer"
export const Question = ()=>{
    const[quizState, dispatch]=useContext(QuizContext)
    const curQuestion = quizState.questions[quizState.curQuestionIndex]
    return(<><div className="questions" onCopy={(e)=>{e.preventDefault();}}>{curQuestion.question}</div>
    <div onCopy={(e)=>{e.preventDefault();}}>
        {quizState.answer.map((ans, i)=>(<Answer answerText={ans} index={i} key={i} selectedAnswer={(answerText)=>dispatch({type:'Select_Answer', payload:answerText})}/>))}
    </div>
    </>)
}

const studentDetails = ()=>{
    const data = [{
        id :1,
        name : "name1",

    },{
        id :2,
        name : "name1",
        
    },{
        id :3,
        name : "name1",
        
    }]
}