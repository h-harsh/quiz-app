import {Quiz, Questions, Option} from '../../data/quizdata.types'


export type InitialStateType = {
  score: number;
  questionNo: number;
  quizData: Quiz | undefined,
  quizStatus: string 
};



export type payloadObj = {
  text: string;
  isRight: boolean;
  isUserSelected: boolean
};
export type ACTION =
| {type: 'SET_QUIZ_DATA', payload: Quiz}
| {type: 'START_QUIZ', payload: string}
| {type: 'ANSWERED', payload: payloadObj}
| {type: 'SKIP'}
| {type: 'END_QUIZ'}
| { type: "NEXT_QUESTION"; payload: string }
| { type: "CHECK"; payload: payloadObj }
| { type: "RESET" };
