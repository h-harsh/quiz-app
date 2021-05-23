import { useQuiz } from "../Components/Cont/quizContext";
import { QuestionDisplay } from "../Components/questionDisplay";
import { Header } from "../Components/header";
import Button from '@material-ui/core/Button'

export const QuizPlay = () => {
  const { inQuiz,  setInQuiz  } = useQuiz();
  return (
    <>
      <Header />
      <div  className="sub-box" >
      {inQuiz ? null : (
        <div className="glass" style={{padding:"3rem"}} >
          <h1>Rules For quiz</h1>
          <p>Manna hi padege</p>
          <p>Nito mat khelo</p>
          <p>JAo ghar jao beta</p>
          <Button onClick={() => setInQuiz(true)} variant="contained" color="primary">
              Start Quiz
            </Button>
            </div>
      )}
      

      {inQuiz ? (
        <div className="glass" style={{padding:"2rem"}}>
          <QuestionDisplay />
        </div>
      ) : null}

      </div>
    </>
  );
};
