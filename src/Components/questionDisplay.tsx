import { useEffect, useState } from "react";
import { quizData } from "../data/quiz.data";
import { useQuiz } from "./Cont/quizContext";
import { useNavigate } from "react-router-dom";

export const QuestionDisplay = () => {
  const { dispatch, state, inQuiz, setInQuiz, setUserName } = useQuiz();
  const [count, setCount] = useState(10);
  let navigate = useNavigate();

  useEffect(() => {
    if (count === 0) {
      dispatch({ type: "NEXT_QUESTION", payload: "option" });
      setCount(10);
    }
    let timer = setInterval(() => {
      setCount(count - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [count]);

  if(state.questionNo === 3){
    navigate('end')
  }

  return (
    <>
      <h2>Status: {state.ansStatus} </h2>
      <h3>Timer {count}</h3>

      {quizData.questions.map((item, i) => {
        if (i === state.questionNo) {
          return <h2>{item.question}</h2>;
        }
      })}
      {quizData.questions[state.questionNo].options.map((item) => {
        return (
          <button
            className="options"
            onClick={() => { 
              state.questionNo !== 3 ? dispatch({ type: "NEXT_QUESTION", payload: "option" }) : 
              dispatch({ type: "CHECK", payload: item });
              setCount(10);
            }}
          >
            {item.text}
          </button>
        );
      })}
      <div>
        <button
          onClick={() => {
            dispatch({ type: "RESET" });
            setInQuiz(false);
            setUserName("");
          }}
        >
          Reset
        </button>
        <button
          onClick={() => {
            dispatch({ type: "NEXT_QUESTION", payload: "option" });
            setCount(10);
          }}
        >
          Skip
        </button>
      </div>
    </>
  );
};
