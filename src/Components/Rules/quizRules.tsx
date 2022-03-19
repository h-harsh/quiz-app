import { Link, useNavigate } from "react-router-dom";
import { useQuiz } from "../Quiz Context/quizContext";
import "./quizRules.css";

export const QuizRulesComp = () => {
  const { dispatch, state } = useQuiz();
  const navigate = useNavigate();
  return (
    <>
      {state.quizData !== undefined ? (
        <div className="common-box-rules">
          <h1>Rules :</h1>
          <ul>
            <li>Do not refresh the page</li>
            <li>Refreshing any time will take you to home</li>
            <li>Skip the ones you not sure about</li>
            <li>5 Marks for a right answer</li>
            <li>-3 Marks for wrong answer</li>
          </ul>
          <Link to="/play">
            <button
              onClick={() => dispatch({ type: "START_QUIZ", payload: "true" })}
            >
              Start Quiz
            </button>
          </Link>
        </div>
      ) : (
        navigate("/")
      )}
    </>
  );
};
