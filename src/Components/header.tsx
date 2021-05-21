import { useQuiz } from "./Cont/quizContext";

export const Header = () => {
  const { state, userName, inQuiz } = useQuiz();
  return (
    <>
      <h1>Quiz Masteer </h1>
      <h1>Hello {userName}</h1>
      {inQuiz ? (
        <div>
          <h2>Score {state.score}</h2>
          <h2>Question no. {state.questionNo}</h2>
        </div>
      ) : null}
    </>
  );
};
