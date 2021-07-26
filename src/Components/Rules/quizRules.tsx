import { Link, useNavigate } from "react-router-dom";
import { useQuiz } from "../Quiz Context/quizContext";
import "./quizRules.css";

export const QuizRulesComp = () => {
  const { dispatch, state } = useQuiz();
  const navigate = useNavigate();
  return (
    <>
      {state.quizData !== undefined ? (
        <div>
          <h1>Rules</h1>
          <h2>Do not refresh the page</h2>
          <h2>Refreshing any time will take you to home</h2>
          <h2>Skip the ones you not sure about</h2>
          <h2>5 Marks for a right answer</h2>
          <h2>-3 Marks for wrong answer</h2>
          <Link to="/play">
            <button
              onClick={() => dispatch({ type: "START_QUIZ", payload: "true" })}
            >
              Start Quiz
            </button>
          </Link>
        </div>
      ) : 
        navigate("/")
      }
    </>
  );
};
