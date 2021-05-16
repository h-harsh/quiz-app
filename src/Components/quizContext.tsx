import { createContext } from "react";
import React, { useReducer } from "react";
import { quizData } from "../data/quiz.data";

type InitialStateType = {
  score: number;
  questionNo: number;
  ansStatus: string
};

const initialStateReducer : InitialStateType = {
  score: 0,
  questionNo: 1,
  ansStatus: ""
};

type payloadObj = {
  text: string,
  isRight: boolean
}

type ACTION = 
| {type: "NEXT_QUESTION"; payload: string}
| {type: "CHECK"; payload: payloadObj}
| {type: "RESET"};


export const initialValuesCont = {
  state: initialStateReducer,
  dispatch: (action: ACTION) => {}
}


export const QuizContext = createContext(initialValuesCont);
// export const QuizContext = React.createContext<{
//   state: typeof initialStateReducer;
//   dispatch: (action: ACTION) => void; }>({
//   state: initialStateReducer,
//   dispatch: () => {}
// });


export const QuizProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducerFunc, initialStateReducer);

  return <QuizContext.Provider value={{state, dispatch}}>
      {children}
  </QuizContext.Provider>;
};

const reducerFunc = (state: typeof initialStateReducer, action : ACTION) => {
  switch (action.type) {
    case "RESET":
      return state = {
        score: 0,
        questionNo: 1,
        ansStatus: ""
       };
    case "NEXT_QUESTION":
       if(state.questionNo < 3){  
        return  {...state,
          questionNo: state.questionNo + 1,
          ansStatus: ""
          };
      } else {
        return {
          ...state, questionNo: 1, ansStatus: ""
        }
      }
      
    case "CHECK":
      return (action.payload.isRight ? {...state, score: state.score + 5, ansStatus: "Right Answer"} 
        :
        {...state, score: state.score - 3, ansStatus: "Wrong answer"}
         )     
    default:
      return state;
  }
};


// case "NEXT_QUESTION":
//       return {...state,
//       questionNo: state.questionNo + 1,
//       ansStatus: ""
//       };

// quizData.questions.length