import { useContext } from "react";
import { QuizContext } from "../context/QuizContext";
import { Question } from "./Question";

export const Quiz = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div>
      {quizState.showResult && (
        <div className="resultpage">
          <h1 className="resulth1">Congratulation!...</h1>
          <p>you have completed the quiz</p>
          Show Result
          <p className="pscore">
            you got the score {quizState.correctAnswerCount}/
            {quizState.questions.length}
          </p>
          <button
            className="butres"
            onClick={() => dispatch({ type: "Restart" })}
          >
            Restart
          </button>
        </div>
      )}
      {!quizState.showResult && (
        <>
          {" "}
          <div className="score">
            Question {quizState.curQuestionIndex + 1}/
            {quizState.questions.length}
          </div>
          <div className="question">
            <Question />
          </div>
          <button
            className="btn"
            onClick={() => dispatch({ type: "next_question" })}
          >
            Next
          </button>
        </>
      )}
    </div>
  );
};
