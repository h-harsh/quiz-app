import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useQuiz } from "../Quiz Context/quizContext";

export const NewQuestionDisplay = () => {
  const { state, dispatch } = useQuiz();
  const [count, setCount] = useState(1000);
  const navigate = useNavigate();

  useEffect(() => {
    if (count === 0) {
      dispatch({ type: "SKIP" });
      setCount(10);
    }
    let timer = setInterval(() => {
      setCount(count - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [count]);

  
  if (state.questionNo > 4 || state.quizData === undefined) {
      navigate("/end");
      dispatch({type:"END_QUIZ"})
    console.log("quiz End")
    }
  return (
    <div>
      {state.quizStatus === "true" ? (
        <div>
          <h1>{count}</h1>
          <h2>{state.questionNo}</h2>
          <h1>{state.quizData?.questions[state.questionNo - 1].question}</h1>
          {state.quizData?.questions[state.questionNo - 1].options.map(
            (item) => {
              return (
              <button
              onClick={() => dispatch({type:'ANSWERED', payload: item})}
              >{item.text}</button>
              );
            }
          )}
          <button
            onClick={() => {
              dispatch({ type: "SKIP" });
              setCount(10);
            }}
          >
            Skip
          </button>
          <button
          onClick={() => {dispatch({type:"END_QUIZ"}); navigate("/end")}}
          >End</button>
        </div>
      ) : null}
    </div>
  );
};
