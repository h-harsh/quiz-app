import {Quiz} from '../../data/quizdata.types'

export type InitailStateReducer = {
    currentQuiz: string,
    quizStatus: boolean,
    userName: string,
    // quizData: Quiz | undefined
}


export type ACTION =
| {type: 'NAME', payload: string} 
| {type: 'SET_QUIZ_NAME', payload: string}
// | {type: 'SET_QUIZ_DATA', payload: Quiz}
| {type: 'SET_OUT_QUIZ', payload: false}
| {type: 'SET_IN_QUIZ', payload: true}
| {type: 'RESTART'};