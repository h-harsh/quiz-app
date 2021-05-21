import { createContext, useContext } from "react";
import React, { useReducer, useState } from "react";
import {InitialStateType, ACTION, payloadObj} from './types'
import {reducerFunc} from './quizContReducer'

const initialStateReducer : InitialStateType = {
  score: 0,
  questionNo: 1,
  ansStatus: ""
};

export const initialValuesCont = {
  state: initialStateReducer,
  dispatch: (action: ACTION) => {},
  inQuiz: false,
  setInQuiz: (inQuiz: boolean) => {},
  userName: "",
  setUserName: (userName: string) => {},
  quizName: "",
  setQuizName: (quizName: string) => {}
}


export const QuizContext = createContext(initialValuesCont);

export const QuizProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducerFunc, initialStateReducer);
  const [inQuiz, setInQuiz] = useState<boolean>(false);
  const [userName, setUserName] = useState<string>("");
  const [quizName, setQuizName] = useState<string>("");

  return <QuizContext.Provider value={{state, dispatch, inQuiz, setInQuiz, userName, setUserName, quizName, setQuizName}}>
      {children}
  </QuizContext.Provider>;
};

export const useQuiz = () => {
  return useContext(QuizContext)
}
