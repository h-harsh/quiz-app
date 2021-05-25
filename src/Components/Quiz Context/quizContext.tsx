import { createContext, useContext, useEffect } from "react";
import React, { useReducer, useState } from "react";
import {InitialStateType, ACTION} from './types'
import {reducerFunc} from './quizContReducer';
import {Quiz} from '../../data/quiz.data'
import axios from 'axios'

const initialStateReducer : InitialStateType = {
  score: 0,
  questionNo: 0,
  ansStatus: "",
  wrongAnswered: []
};
type QuizContextData  = {
  state: InitialStateType,
  dispatch: (action: ACTION) => void,
  inQuiz: boolean,
  setInQuiz: (inQuiz: boolean) => void,
  userName: string,
  setUserName: (userName: string) => void,
  quizName: object | string ,
  setQuizName: (quizName: string | Quiz) => void,
  temp: Quiz | null ,
  setTemp: (temp: null | Quiz) => void,

}
 
export const quizContextDefaultValue: QuizContextData = {
  state:initialStateReducer,
  dispatch: () => null,
  inQuiz: false,
  setInQuiz: () => null,
  userName:"",
  setUserName: () => null,
  quizName:"quiz1",
  setQuizName: () => null,
  temp:null,
  setTemp: () => null
}
 
export const QuizContext = createContext<QuizContextData>(quizContextDefaultValue);

export const QuizProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducerFunc, initialStateReducer);

  const [inQuiz, setInQuiz] = useState<boolean>(false);
  const [userName, setUserName] = useState<string>("");
  const [quizName, setQuizName] = useState<Quiz | string>("quiz1");
  const [temp, setTemp] = useState<Quiz | null>(null);

  return  <QuizContext.Provider value={{state, dispatch, inQuiz, setInQuiz, userName, setUserName, quizName, setQuizName, temp, setTemp}}>
      {children}
  </QuizContext.Provider>;
};

export const useQuiz = () => {
  return useContext(QuizContext)
}
