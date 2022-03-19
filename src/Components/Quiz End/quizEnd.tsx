import { Link } from "react-router-dom";
import { useQuiz } from "../Quiz Context/quizContext";
import "./quizEnd.css";
import { PrimaryButton } from "../../New Components";

export const QuizEndComp = () => {
  const { state, dispatch } = useQuiz();

  const getClass = (item) => {
    if (item.isUserSelected && item.isRight) {
      return "right-ans";
    } else if (item.isUserSelected && item.isRight === false) {
      return "wrong";
    } else if (item.isUserSelected === false && item.isRight) {
      return "right-ans";
    } else return "no";
  };

  return (
    <>
      <h1 className="page-title">
        You score is <i className="fas fa-medal"></i> {state.score}
      </h1>

      {state.quizData ? (
        state.quizData.questions.map((questionObj, index) => {
          return (
            <div className="common-box-ques only-card">
              <h5 className="main-ques">
                Q.{index + 1} {questionObj.question}
              </h5>
              <div className="options">
                {questionObj.options.map((item) => {
                  return (
                    <button className={getClass(item)}>{item.text}</button>
                  );
                })}
              </div>
            </div>
          );
        })
      ) : (
        <h1>Error Occured, Continue to home</h1>
      )}

      <div style={{margin:'1rem', marginBottom:'2rem'}}>
      <Link to="/">
        <PrimaryButton
          text="Play Again"
          clickHandler={() => dispatch({ type: "END_QUIZ" })}
        />
      </Link>
      </div>
    </>
  );
};

// {questionObj.options.map((item) => {
//   return <p
//   className={item.isUserSelected ? "wrong": "no"}
//   ><span className={item.isRight ? "right-ans": "no"}
//   >{item.text}</span></p>;
// })}
