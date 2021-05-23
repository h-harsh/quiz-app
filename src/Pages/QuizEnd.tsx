import { Link } from "react-router-dom";
import { useQuiz } from "../Components/Cont/quizContext";
import {Header} from '../Components/header'
import {Button} from '@material-ui/core'

export const QuizEnd = () => {
  const {  state, setInQuiz, temp } = useQuiz();
  setInQuiz(false);
  console.log(state)
  return (
    <>
    <Header />
    <div className="sub-box">
    <div className="glass" style={{padding:"2rem"}} >
      <h1>Okay By bye Tata Khel Khatm</h1>
      <h2>Score iz {state.score}</h2>
      <h2>The one's you answered wrong </h2>
      <div style={{textAlign:"left"}}>
      { temp !== null ?  temp.questions.map((item, i) => {
           return state.wrongAnswered.map(num => {
              if(num  === (i + 1)){
                console.log(num, (i+1))
                return (<p> # {item.question}</p>)
              } else return ''
            })

          })
          : <div>Loading...</div>
        }
        </div>
      
      <Button variant="outlined" color="secondary">
      <Link to="/">Home</Link>
    </Button>
      </div>
      </div>
    </>
  );
};
