import { createContext, useContext } from "react";
import React, { useReducer, useState } from "react";

type InitialStateType = {
    wrongAnswers: []
}
const initialStateReducer : InitialStateType = {
  wrongAnswers : []
};

type QuizContextData  = {
  state: InitialStateType,
  dispatch: (action: ACTION) => void,
  inQuiz: boolean,
  setInQuiz: (inQuiz: boolean) => void,
  userName: string,
  setUserName: (userName: string) => void,
  quizName: object | string ,
  setQuizName: (quizName: string | Quiz) => void

}
 
export const quizContextDefaultValue: QuizContextData = {
  state:initialStateReducer,
  dispatch: () => null,
  inQuiz: false,
  setInQuiz: () => null,
  userName:"",
  setUserName: () => null,
  quizName:"quiz1",
  setQuizName: () => null
}
 
export const QuizContext = createContext<QuizContextData>(quizContextDefaultValue);

export const QuizProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducerFunc, initialStateReducer);
  const [inQuiz, setInQuiz] = useState<boolean>(false);
  const [userName, setUserName] = useState<string>("");
  const [quizName, setQuizName] = useState<Quiz | string>("quiz1");

  return <QuizContext.Provider value={{state, dispatch}}>
      {children}
  </QuizContext.Provider>;
};

export const useQuiz = () => {
  return useContext(QuizContext)
}
