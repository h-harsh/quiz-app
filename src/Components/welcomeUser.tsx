import { useQuiz } from "./Cont/quizContext";
import { Link } from "react-router-dom";
import {Header} from './header'

export const WelcomeUser = () => {
  const { dispatch, state, inQuiz, setInQuiz, userName, setUserName, setQuizName } = useQuiz();
  

  return (
    <>
      <Header />
      <div>
        <h1>Hey Welcome buddy, Would you like to play a quiz</h1>
        <h2>Here Enter your name to get started</h2>
        <input onChange={(e) => setUserName(e.target.value)} type="text" />
          
      </div>
      <div>
        <h2>Select which quiz you will play</h2>
        <h3 onClick={() => setQuizName("quiz1")} >quiz 1</h3>
        <h3 onClick={() => setQuizName("quiz1")} >quiz 2</h3>
        <h3 onClick={() => setQuizName("quiz1")} >quiz 3</h3>
        <Link to="/play"> Lets Start </Link>
      </div>
    </>
  );
};
