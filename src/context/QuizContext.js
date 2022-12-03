import { createContext, useReducer } from "react";
import questions from "../data/questions.json";
import { ShuffleAnswer } from "../helpers/ShuffleAnswer";
const initialState = {
  questions,
  curQuestionIndex: 0,
  showResult: false,
  correctAnswerCount: 0,
  answer: ShuffleAnswer(questions[0]),
};
function reducer(state, action) {
  switch (action.type) {
    case "next_question": {
      const showResult = state.questions.length - 1 === state.curQuestionIndex;
      const curIndex = showResult
        ? state.curQuestionIndex
        : state.curQuestionIndex + 1;
      const answer = ShuffleAnswer(questions[curIndex]);
      return { ...state, curQuestionIndex: curIndex, showResult, answer };
    }
    case "Restart": {
      return initialState;
    }

    case "Select_Answer": {
        const isCorrectAnswer = state.questions[state.curQuestionIndex].correctAnswer === action.payload;
        const correctAnswerCount = isCorrectAnswer ? state.correctAnswerCount+1 : state.correctAnswerCount;
        return{
            ...state,correctAnswerCount
        }
    }

    default:
      return state;
  }
}
export const QuizContext = createContext();
export function QuizContextProvider({ children }) {
  const value = useReducer(reducer, initialState);
  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
}
