/* eslint-disable */
import { useQuiz } from "../Components/Quiz Context/quizContext";
import { useEffect } from "react";
import { useAuth } from "../Components/Auth/authContext";

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
    <div className="other-outer">
      <div className="quiz-history-intro ">
        <h1>Hello {state.user?.fullName} !</h1>
        <h1>
          Here are the details of all the quizzes you  played <i className="fas fa-medal"></i>
        </h1>
      </div>
      <table className="common-box-table  only-card">
        <tr>
          <th>Quiz Name</th>
          <th>Your Score</th>
        </tr>
        {state.user ? (
          state.user?.userData.map((item) => {
            return (
              <>
                <tr>
                  <td>{item.quizName}</td>
                  <td>{item.score}</td>
                </tr>
              </>
            );
          })
        ) : (
          <tr>
            <td>Loading....</td>
            <td>Loading....</td>
          </tr>
        )}
      </table>
    </div>
  );
};
