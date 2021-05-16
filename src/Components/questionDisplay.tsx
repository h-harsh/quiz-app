import { useContext, useState } from "react";
import { QuizContext } from "./quizContext";
import { quizData } from "../data/quiz.data";


export const QuestionDisplay = () => {
  const { dispatch, state } = useContext(QuizContext);
//   const [timer setTimer] = useState(false)


// (function () {
//     let myVar
//   if(state.questionNo < 3){
//      myVar = setInterval(() => {
//          dispatch({type: "NEXT_QUESTION", payload: "option"})
//        }, 3000)
//        clearInterval(myVar)
//    } 
//    })()

// type GreeFunc = (input: number) => void;

// function queChanger (input: number) {
//     let myVar
//     if(input >= 3){
//         clearInterval(myVar)
//     } else {
//        myVar =  setInterval(() => {
//         dispatch({type: "NEXT_QUESTION", payload: "option"})
//         }, 5000)
//     }
// }
// queChanger(state.questionNo);

// function cancleFunc () {
//     clearInterval(mayVar)
// }

// const mayVar = setInterval(() =>{
//     if(state.questionNo < 3){
//         dispatch({type: "NEXT_QUESTION", payload: "option"})

//     } else cancleFunc();
// }, 4000 )


  return (
    <>
      <h2>Status: {state.ansStatus} </h2>

{/* {
    var timesRun = 0;
    var interval = setTimeout(function(){
        timesRun += 1;
        if(timesRun === 3){
            clearTimeout(interval);
        }
        dispatch({type: "NEXT_QUESTION", payload: "option"})
    }, 3000);
} */}

      {quizData.questions.map((item, i) => {
        if (i === state.questionNo) {
          return <h2>{item.question}</h2>;
        }
      })}

      {quizData.questions[state.questionNo].options.map((item) => {
        return (
          <button
            className="options"
            onClick={() => dispatch({ type: "CHECK", payload: item })}
          >
            {item.text}
          </button>
        );
      })}
    </>
  );
};

// quizData.questions.map((item, i) => {
//     if (i === state.questionNo) {
//       return <h2>{item.question}</h2>;
//     }
//   })
