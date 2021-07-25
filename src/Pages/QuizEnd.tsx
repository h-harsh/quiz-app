import { Link } from "react-router-dom";
import { useQuiz } from "../Components/Quiz Context/quizContext";
import { useEffect, useState } from "react";



export const QuizEnd = () => {
  const { state, dispatch } = useQuiz();

  // useEffect(() => {
  //   userDispatch({ type: "SET_OUT_QUIZ", payload: false });
  // }, []);

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
              ><span className={item.isRight ? "right": "no"}
              >{item.text}</span></p>;
            })}
          </>)
        })) : ( <h1>Error Occured, Continue to home</h1> )
      }

      <button onClick={() => dispatch({ type: "END_QUIZ" })}>
        {/* api call */}
        <Link to="/"> Home </Link>
      </button>
    </>
  );
};

// import { Link } from "react-router-dom";
// import { useQuiz } from "../Components/Quiz Context/quizContext";
// import { Button } from "@material-ui/core";
// import { useUserData } from "../Components/UserData Context/userDataContext";
// import { useEffect } from "react";

// export const QuizEnd = () => {
//   const { state, dispatch } = useQuiz();
//   const { userState, userDispatch } = useUserData();

//   useEffect(() => {
//     userDispatch({ type: "SET_OUT_QUIZ", payload: false });
//   }, []);

//   return (
//     <>
//       <div className="sub-box">
//         <div className="glass" style={{ padding: "2rem" }}>
//           <h1>Okay By bye Tata Khel Khatm</h1>
//           <h2>Score iz {state.score}</h2>
//           <h2>The one's you answered wrong </h2>
//           <div style={{ textAlign: "left" }}>
//             {/* {state.answeredData.map((item)=> {
//               return(<div>
//                 <h3>{item.question}</h3>
//                 {item.options?.map(option => {
//                   return (<p  style={{backgroundColor: option.isUserSelected && option.isRight ? "green" : "red"}}  > {option.text} </p>)
//                 })}
//               </div>)
//               })} */}
//           </div>

//           <Button onClick={() => {userDispatch({type: 'RESTART'}); dispatch({ type: "RESET" })}} variant="outlined" color="secondary">
//             <Link to="/">Home</Link>

//           </Button>
//         </div>
//       </div>
//     </>
//   );
// };
