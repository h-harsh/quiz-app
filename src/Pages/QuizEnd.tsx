import { Link } from "react-router-dom";
import { useQuiz } from "../Components/Quiz Context/quizContext";
import { Header } from "../Components/header";
import { Button } from "@material-ui/core";
import { useUserData } from "../Components/UserData Context/userDataContext";
import { useEffect } from "react";

export const QuizEnd = () => {
  const { state, dispatch } = useQuiz();
  const { userState, userDispatch } = useUserData();

  useEffect(() => {
    userDispatch({ type: "SET_OUT_QUIZ", payload: false });
  }, []);


  return (
    <>
      <Header />
      <div className="sub-box">
        <div className="glass" style={{ padding: "2rem" }}>
          <h1>Okay By bye Tata Khel Khatm</h1>
          <h2>Score iz {state.score}</h2>
          <h2>The one's you answered wrong </h2>
          <div style={{ textAlign: "left" }}>
            {state.answeredData.map((item)=> {
              return(<div> 
                <h3>{item.question}</h3>
                {item.options?.map(option => {
                  return (<p  style={{backgroundColor: option.isUserSelected && option.isRight ? "green" : "red"}}  > {option.text} </p>)
                })}
              </div>)
              })}
          </div>

          <Button onClick={() => {userDispatch({type: 'RESTART'}); dispatch({ type: "RESET" })}} variant="outlined" color="secondary">
            <Link to="/">Home</Link>
            
          </Button>
        </div>
      </div>
    </>
  );
};


// {state.quizData !== undefined ? (
//   state.quizData.questions.map((item, i) => {
//     return state.wrongAnswered.map((num) => {
//       if (num === i + 1) {
//         console.log(num, i + 1);
//         // return <p> # {item.question}</p>;
//         return (<div> 
//           <h3>{item.question}</h3> 
//             {state.quizData && state.quizData.questions[num - 1].options.map((item) => {
//               return <p>{item.text}</p>
//             }  ) }
//          </div>)
//       } else return "";
//     });
//   })
// ) : (
//   <div>Loading...</div>
// )}