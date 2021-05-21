import { useQuiz } from "../Components/Cont/quizContext";
import { QuestionDisplay } from "../Components/questionDisplay";
import { Header } from "../Components/header";
import { useState } from "react";

export const QuizPlay = () => {
  const { inQuiz, dispatch, setInQuiz, setUserName, quizName } = useQuiz();
  return (
    <>
      <Header />
      {inQuiz ? null : (
        <div>
          <h1>Rules For quiz</h1>
          <p>Manna hi padege</p>
          <p>Nito mat khelo</p>
          <p>JAo ghar jao beta</p>
          <button onClick={() => setInQuiz(true)}> Start Quiz </button>
        </div>
      )}
      {inQuiz ? (
        <div>
          <QuestionDisplay />
        </div>
      ) : null}
    </>
  );
};
