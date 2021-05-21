import {InitialStateType, ACTION} from './types'

export const reducerFunc = (state: InitialStateType, action : ACTION) => {
    switch (action.type) {
      case "RESET":
        return state = {
          score: 0,
          questionNo: 0,
          ansStatus: ""
         };
      case "NEXT_QUESTION":
         if(state.questionNo <= 4){  
          return  {...state,
            questionNo: state.questionNo + 1,
            ansStatus: ""
            };
        } else {
          return {
            ...state, questionNo: 0, ansStatus: ""
          }
        }
      case "CHECK":
        return (action.payload.isRight ? {...state, score: state.score + 5, ansStatus: "Right Answer"} 
          :
          {...state, score: state.score - 3, ansStatus: "Wrong answer"}
           )
      case "END_QUIZ":
        return state;
  
      default:
        return state;
    }
  };