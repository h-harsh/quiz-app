import { createContext, useContext } from "react";
import React, { useReducer } from "react";
import { InitialStateType, ACTION } from "./types";
import { reducerFunc } from "./quizContReducer";
import axios from "axios";
import { baseurl } from "../../utils/apiCalls";

const initialStateReducer: InitialStateType = {
  score: 0,
  questionNo: 1,
  quizData: undefined,
  quizStatus: "false",
  user: undefined,
};
type QuizContextData = {
  state: InitialStateType;
  dispatch: (action: ACTION) => void;
  fetchQuizData: (id: string) => void;
  fetchUserData: () => void;
  
};

export const quizContextDefaultValue: QuizContextData = {
  state: initialStateReducer,
  dispatch: () => null,
  fetchQuizData: (id: string) => null,
  fetchUserData: () => null,
};

export const QuizContext = createContext<QuizContextData>(
  quizContextDefaultValue
);

export const QuizProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducerFunc, initialStateReducer);
  console.log(state);

  const fetchQuizData = async (id: string) => {
    const response = await axios.get(`${baseurl}/quiz/${id}`);
    dispatch({ type: "SET_QUIZ_DATA", payload: response.data.quizData });
    return null;
  };
  const fetchUserData = async () => {
    const response = await axios.get(`${baseurl}/user`)
     console.log(response.data.userData)
    dispatch({ type: "LOAD_USER", payload: response.data.userData });
    return null;
  };

  return (
    <QuizContext.Provider value={{ state, dispatch, fetchQuizData, fetchUserData }}>
      {children}
    </QuizContext.Provider>
  );
};

export const useQuiz = () => {
  return useContext(QuizContext);
};
