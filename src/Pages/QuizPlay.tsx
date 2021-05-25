import { QuestionDisplay } from "../Components/questionDisplay";
import { Header } from "../Components/header";
import Button from '@material-ui/core/Button'
import { useUserData } from "../Components/UserData Context/userDataContext";

export const QuizPlay = () => {
  const {userState, userDispatch} = useUserData();
  return (
    <>
      <Header />
      <div  className="sub-box" >
      {userState.quizStatus ? false : (
        <div className="glass" style={{padding:"3rem"}} >
          <h1>Rules For quiz</h1>
          <p>Manna hi padege</p>
          <p>Nito mat khelo</p>
          <p>JAo ghar jao beta</p>
          <Button onClick={() => userDispatch({type: 'SET_IN_QUIZ', payload: true})} variant="contained" color="primary">
              Start Quiz
            </Button>
            </div>
      )}
      
      {userState.quizStatus ? (
        <div className="glass" style={{padding:"2rem"}}>
          <QuestionDisplay />
        </div>
      ) : null}

      </div>
    </>
  );
};
