import { useEffect, useState } from "react";
import { Quiz, quizData } from "../data/quiz.data";
import { useQuiz } from "./Cont/quizContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const QuestionDisplay = () => {
  const { dispatch, state, setInQuiz, setUserName, quizName } =
    useQuiz();
  const [count, setCount] = useState(10);
  const [temp, setTemp] = useState<Quiz | null>(null);
  let navigate = useNavigate();

  const baseUrl = "https://quiz-app-backend.harshporwal1.repl.co";

  useEffect(() => {
    (async function getQuizData() {
      const response = await axios.get(`${baseUrl}/allQuiz`);
      console.log(response.data, "yes");
      if (quizName === "quiz1") {
        setTemp(response.data.quiz1.quiz1);
      } else if (quizName === "quiz2") {
        setTemp(response.data.quiz2.quiz2);
      } else if (quizName === "quiz3") {
        setTemp(response.data.quiz3.quiz3);
      }
    })();
  }, [quizName]);

  // console.log(quizName, temp)

  useEffect(() => {
    if (count === 0) {
      if (state.questionNo > 4) {
        navigate("end");
      } else {
        dispatch({ type: "NEXT_QUESTION", payload: "option" });
        setCount(10);
      }
    }
    let timer = setInterval(() => {
      setCount(count - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [count]);

  if (state.questionNo === 4) {
    navigate("end");
  }

  return (
    <>
      <h2>Status: {state.ansStatus} </h2>
      <h3>Timer {count}</h3>
      {temp !== null ? (
        <div>
          {temp.questions.map((item, i) => {
            if (i === state.questionNo) {
              return <h2>{item.question}</h2>;
            }
          })}
          {temp.questions[state.questionNo].options.map((item) => {
            return (
              <button
                className="options"
                onClick={() => {
                  state.questionNo === 4
                    ? dispatch({ type: "CHECK", payload: item })
                    : dispatch({ type: "NEXT_QUESTION", payload: "option" });
                  dispatch({ type: "CHECK", payload: item });
                  setCount(10);
                }}
              >
                {item.text}
              </button>
            );
          })}
        </div>
      ) : (
        <h1>HAo</h1>
      )}
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
