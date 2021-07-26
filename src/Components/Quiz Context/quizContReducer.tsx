import {InitialStateType, ACTION} from './types'

export const reducerFunc = (state: InitialStateType, action : ACTION) => {
    switch (action.type) {
      case "SET_QUIZ_DATA":
        return {...state, quizData: action.payload};
      case "LOAD_USER":
        return {...state, user: action.payload};
      case "START_QUIZ":
        return {...state, quizStatus: "true"}
      case "SKIP":
        return {...state, questionNo: state.questionNo + 1}
      case "END_QUIZ":
        // return {...state, quizStatus: "false"}
        return {...state,score: 0, questionNo: 1, quizStatus: "false"}
      case "ANSWERED":
        const filteredOption = state.quizData?.questions[state.questionNo - 1].options.map(item => {
          if(item.text === action.payload.text){
           return{...item, isUserSelected: true}
          } else return item
         } )
      
        return state =  {...state, questionNo: state.questionNo + 1,
          score: action.payload.isRight ? state.score + 5 : state.score -3,
         quizData: {
           ...state.quizData,
          //  questions: [...state.quizData?.questions, {...state.quizData?.questions[state.questionNo -1], options: filteredOption} ] } 
           questions: state.quizData?.questions.map((questionObj, index) => {
             if(index === state.questionNo -1){
              return {...questionObj, options: filteredOption}
             } else return questionObj
           }) 
          } } 
        
      default:
        return state;
    }
  };


  // if(state.questionNo > 4){
  //   return state =  {...state, quizStatus:"false", questionNo: state.questionNo + 1,
  //     score: action.payload.isRight ? state.score + 5 : state.score -3,  
  //    quizData: {...state.quizData, questions: [...state.quizData?.questions, {...state.quizData?.questions[state.questionNo -1], options: filteredOption} ] } } 
  //   } else {

