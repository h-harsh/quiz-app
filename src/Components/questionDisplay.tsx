import { useEffect, useState } from "react";
import { useQuiz } from "./Quiz Context/quizContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Button } from "@material-ui/core";



export const QuestionDisplay = () => {
  const { dispatch, state, setInQuiz, setUserName, quizName, temp, setTemp } =
    useQuiz();
  const [count, setCount] = useState(10);
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

  // console.log(temp)

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
          <div style={{display: "flex", flexDirection: "column", alignItems: "center"}} >
          {temp.questions[state.questionNo].options.map((item) => {
            return (
              <Button
              className="options"
              style={{display: "block", textAlign: "center"}}
                onClick={() => {
                  state.questionNo === 4
                    ? dispatch({ type: "CHECK", payload: item })
                    : dispatch({ type: "NEXT_QUESTION", payload: "option" });
                  dispatch({ type: "CHECK", payload: item });
                  setCount(10);
                }}
              variant="outlined">{item.text}</Button>
              
            );
          })}
          </div>
        </div>
      ) : (
        <h1>Loadingzz...</h1>
      )}
      <div>
        <Button
          onClick={() => {
            dispatch({ type: "RESET" });
            setInQuiz(false);
            setUserName("");
          }}
          variant="contained"
          color="secondary"
        >
          Reset
        </Button>
        <Button
          onClick={() => {
            dispatch({ type: "NEXT_QUESTION", payload: "option" });
            setCount(10);
          }}
          variant="contained"
          color="primary"
        >
          Skip
        </Button>
      </div>
    </>
  );
};


