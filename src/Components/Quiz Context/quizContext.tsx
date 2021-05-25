import { createContext, useContext } from "react";
import React, { useReducer } from "react";
import {InitialStateType, ACTION} from './types'
import {reducerFunc} from './quizContReducer';

const initialStateReducer : InitialStateType = {
  score: 0,
  questionNo: 0,
  ansStatus: "",
  wrongAnswered: []
};
type QuizContextData  = {
  state: InitialStateType,
  dispatch: (action: ACTION) => void
}
 
export const quizContextDefaultValue: QuizContextData = {
  state:initialStateReducer,
  dispatch: () => null
}
 
export const QuizContext = createContext<QuizContextData>(quizContextDefaultValue);

export const QuizProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducerFunc, initialStateReducer);

  return  <QuizContext.Provider value={{state, dispatch}}>
      {children}
  </QuizContext.Provider>;
};

export const useQuiz = () => {
  return useContext(QuizContext)
}
