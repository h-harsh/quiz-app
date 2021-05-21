import { Link } from "react-router-dom";
import { useQuiz } from "../Components/Cont/quizContext";

export const QuizEnd = () => {
  const { dispatch, state, setInQuiz, temp, setTemp } = useQuiz();
  setInQuiz(false);
  console.log(state)
  return (
    <>
      <h1>Okay By bye Tata Khel Khatm</h1>
      <h2>Score iz {state.score}</h2>
      <h2>The one's you answered wrong </h2>
      { temp !== null ?  temp.questions.map((item, i) => {
           return state.wrongAnswered.map(num => {
              if(num  === (i + 1)){
                console.log(num, (i+1))
                return (<h2>{item.question}Jo</h2>)
              } else return ''
            })

          })
          : <div>HAos</div>
        }
      <Link to="/">Home</Link>
    </>
  );
};
