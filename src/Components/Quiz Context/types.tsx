import {Quiz, Questions, Option} from '../../data/quizdata.types'

type UserData = {
  quizName:String,
  score:Number
}

type User = {
  fullName: string,
  username: string,
  email: string,
  password: string,
  userData: UserData[]
}

export type InitialStateType = {
  score: number;
  questionNo: number;
  quizData: Quiz | undefined,
  quizStatus: string,
  user: User | undefined 
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
| {type: "LOAD_USER", payload: User}
