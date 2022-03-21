/* eslint-disable */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useQuiz } from "../Quiz Context/quizContext";
import { postScore } from "../../utils/apiCalls";
import { useAuth } from "../Auth/authContext";
import "./questionDisplay.css";
import { CircularProgress, CircularProgressLabel } from "@chakra-ui/react";
import { TertiaryButton, SecondaryButton } from "../../New Components";

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
    if (state.questionNo > 4) {
      postScore(token, state.quizData.quizName, state.score);
    }
  }, [state.questionNo]);

  if (state.questionNo > 4) {
    navigate("/end");
    // dispatch({ type: "END_QUIZ" });
    // postScore(token, state.quizData.quizName, state.score);
  }
  return (
    <>
      {state.quizStatus === "true" && state.quizData !== undefined ? (
        <div className="common-box-ques only-card">
          <div className="ques-item">
            <CircularProgress
              value={count}
              min={0}
              max={30}
              size="4rem"
              color="green.400"
            >
              <CircularProgressLabel>{count}</CircularProgressLabel>
            </CircularProgress>
          </div>

          <h1 className="main-ques">
            {" "}
            {state.questionNo}/{state.quizData.questions.length - 1} Q.{" "}
            {state.quizData?.questions[state.questionNo - 1].question}
          </h1>

          <div className="options">
            {state.quizData?.questions[state.questionNo - 1].options.map(
              (item) => {
                return (
                  <button
                    onClick={() => {
                      dispatch({ type: "ANSWERED", payload: item });
                      setCount(30);
                    }}
                  >
                    {item.text}
                  </button>
                );
              }
            )}
          </div>

          <div className="ques-btns">
            <TertiaryButton
              text="Skip"
              clickHandler={() => {
                dispatch({ type: "SKIP" });
                setCount(30);
              }}
            />
            <SecondaryButton
              text="End"
              clickHandler={() => {
                dispatch({ type: "END_QUIZ" });
                navigate("/end");
              }}
            />
          </div>
          {/* <div className="ques-btns">
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
          </div> */}
        </div>
      ) : (
        navigate("/")
      )}
    </>
  );
};
