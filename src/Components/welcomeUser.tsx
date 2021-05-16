import { useState } from "react";
import { QuestionDisplay } from "./questionDisplay";
import { useContext } from "react";
import { QuizContext } from "./quizContext";

export const WelcomeUser = () => {
  const { dispatch, state } = useContext(QuizContext);
  const [userName, setUserName] = useState<string>("");
  const [inQuiz, setInQuiz] = useState<boolean>(false);
  
  return (
    <>
      <header>
        <h1>Quizology</h1>
        <h2>Hello Sir {userName}</h2>

        {inQuiz ? (
          <div>
            <h2>Score {state.score}</h2>
            <h2>Question no. {state.questionNo}</h2>
          </div>
        ) : null}
      </header>

      {inQuiz ? null : (
        <div>
          <h1>Hey Welcome buddy, Would you like to play a quiz</h1>
          <h2>Here Enter your name to get started</h2>
          <input onChange={(e) => setUserName(e.target.value)} type="text" />
          <button onClick={() => setInQuiz(true)}>Let's Start</button>
        </div>
      )}
      {inQuiz ? <QuestionDisplay /> : null}

      {inQuiz ? (
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
            onClick={() =>
              dispatch({ type: "NEXT_QUESTION", payload: "option" })
            }
          >
            Next
          </button>
        </div>
      ) : null}
    </>
  );
};
