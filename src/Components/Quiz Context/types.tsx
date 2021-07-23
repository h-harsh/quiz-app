import { type } from 'os';
import {Quiz, Questions, Option} from '../../data/quizdata.types'

type Questions2 = {
  question: string | undefined,
  options: Option[] | undefined
} 

export type InitialStateType = {
  score: number;
  questionNo: number;
  ansStatus: string;
  wrongAnswered: number[];
  quizData: Quiz | undefined,
  answeredData: Questions2[] 
};



export type payloadObj = {
  text: string;
  isRight: boolean;
  isUserSelected: boolean
};

export type ACTION =
  | { type: "NEXT_QUESTION"; payload: string }
  | { type: "CHECK"; payload: payloadObj }
  | { type: "RESET" }
  | { type: "END_QUIZ" }
  |  {type: 'SET_QUIZ_DATA', payload: Quiz};
  // | {type: 'CHECKS', payload:{item: payloadObj}}
