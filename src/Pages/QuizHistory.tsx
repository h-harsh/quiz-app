import { useQuiz } from "../Components/Quiz Context/quizContext";
import { useEffect } from "react";
import { useAuth } from "../Components/Auth/authContext";
import { isTemplateMiddle } from "typescript";

export const QuizHistory = () => {
  const { state, fetchUserData } = useQuiz();
  const { token } = useAuth();
  // console.log(state.user.userData)
  useEffect(() => {
    (async function () {
      fetchUserData();
    })();
  }, [token]);
  return (
    <>
    <div className="quiz-history-intro">
      <h1>Hello {state.user?.fullName} !</h1>
      <h1>Your Personal LeaderBoard <i className="fas fa-medal"></i></h1>
      </div>
      <table className="common-box-table">
        <tr>
          <th>Quiz Name</th>
          <th>Your Score</th>
        </tr>
        {state.user?.userData.map((item) => {
          return (
            <>
              <tr>
                <td>{item.quizName}</td>
                <td>{item.score}</td>
              </tr>
            </>
          );
        })}
      </table>
    </>
  );
};
