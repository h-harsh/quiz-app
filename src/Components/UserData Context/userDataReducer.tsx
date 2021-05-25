import {ACTION , InitailStateReducer} from './userData.types'

export const userDataReducer = ( state: InitailStateReducer, action: ACTION) => {
    switch (action.type) {
        case 'NAME':
            return {...state, userName: action.payload};
        case 'SET_QUIZ_NAME':
            return {...state, currentQuiz: action.payload}
        case 'SET_QUIZ_DATA':
            return {...state, quizData: action.payload};
        case 'SET_IN_QUIZ':
            return {...state, quizStatus: true};
        case 'SET_OUT_QUIZ':
            return {...state, quizStatus: false, currentQuiz: ""};
        case 'RESTART':
            return {currentQuiz: '',
            quizStatus: false,
            userName: "",
            quizData: undefined}
    
        default:
           return state;
    }
}