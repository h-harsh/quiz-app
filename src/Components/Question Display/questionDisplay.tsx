import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useQuiz } from "../Quiz Context/quizContext";
import { postScore } from "../../utils/apiCalls";
import { useAuth } from "../Auth/authContext";

export const NewQuestionDisplay = () => {
  const { state, dispatch } = useQuiz();
  const [count, setCount] = useState(30);
  const navigate = useNavigate();
  const { token } = useAuth();

  useEffect(() => {
    if (count === 0) {
      dispatch({ type: "SKIP" });
      setCount(30);
    }
    let timer = setInterval(() => {
      setCount(count - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [count]);

  useEffect(() => {
    // || state.quizData === undefined
    if (state.questionNo > 4 ) {
      postScore(token, state.quizData.quizName, state.score);
    }
  }, [state.questionNo]);

  if (state.questionNo > 4 ) {
    navigate("/end");
    dispatch({ type: "END_QUIZ" });
    // postScore(token, state.quizData.quizName, state.score);
  }
  return (
    <>

      {state.quizStatus === "true"  && state.quizData !== undefined? (
        <div>
          <h1>{count}</h1>
          <h2>{state.questionNo}</h2>
          <h1>{state.quizData?.questions[state.questionNo - 1].question}</h1>
          {state.quizData?.questions[state.questionNo - 1].options.map(
            (item) => {
              return (
                <button
                  onClick={() => dispatch({ type: "ANSWERED", payload: item })}
                >
                  {item.text}
                </button>
              );
            }
          )}
          <button
            onClick={() => {
              dispatch({ type: "SKIP" });
              setCount(30);
            }}
          >
            Skip
          </button>
          <button
            onClick={() => {
              dispatch({ type: "END_QUIZ" });
              navigate("/end");
            }}
          >
            End
          </button>
        </div>
      ) : navigate("/") }

    </>
  );
};
