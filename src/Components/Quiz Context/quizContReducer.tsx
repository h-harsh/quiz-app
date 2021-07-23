import {InitialStateType, ACTION} from './types'

export const reducerFunc = (state: InitialStateType, action : ACTION) => {
    switch (action.type) {
      case "RESET":
        return  {
          score: 0,
          questionNo: 0,
          ansStatus: "",
          wrongAnswered: [],
          quizData: undefined,
          answeredData: []
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
        const filteredOptions = state.quizData?.questions[state.questionNo - 1 ].options.map((option) => {
          console.log(option.text, action.payload.text)
          if(option.text.length == action.payload.text.length){
            console.log(option.text, action.payload.text)
            return{...option, isUserSelected: true}
          } else return option
        })

        return (action.payload.isRight ? {...state, score: state.score + 5, ansStatus: "Right Answer"  } 
          :
          {...state, ansStatus: "Wrong answer", wrongAnswered: [...state.wrongAnswered, state.questionNo],
          answeredData:[...state.answeredData, {question: state.quizData?.questions[state.questionNo].question, 
          options: filteredOptions }] 
         }
           )

      case "END_QUIZ":
        return state;
      case "SET_QUIZ_DATA":
        return {...state, quizData: action.payload}  
  
      default:
        return state;
    }
  };


  // quizData: {...state.quizData,  questions:  [ state.quizData?.questions, state.quizData?.questions.map((ques, i) => {
  //   if((i+1) === state.questionNo){
  //     return ques.options.map(opt => {
  //       if(opt.text === action.payload.text){
  //         return {...opt, isUserSelected: true}
  //       } else return opt
  //     })
  //   }
  // } )] }