import { Link } from "react-router-dom";
import { useQuiz } from "../Quiz Context/quizContext";


export const QuizEndComp = () => {
  const { state, dispatch } = useQuiz();
 
  return (
    <>
      <h1>Okay bye bye tata khel khatm</h1>
      <h2>Final Score is {state.score}</h2>
      <h2>The quiz result</h2>
      {
        state.quizData ?(
        state.quizData.questions.map((questionObj, index) => {
          return (<>
            <h5>{questionObj.question}</h5>
            {questionObj.options.map((item) => {
              return <p
              className={item.isUserSelected ? "wrong": "no"}
              ><span className={item.isRight ? "right-ans": "no"}
              >{item.text}</span></p>;
            })}
          </>)
        })) : ( <h1>Error Occured, Continue to home</h1> )
      }

      {/* <button onClick={() => {
        dispatch({ type: "END_QUIZ" });
        () => postScore(token, state.quizData.quizName, state.score)
      } }> */}
      <button>
        <Link to="/"> Home </Link>
      </button>
    </>
  );
};

