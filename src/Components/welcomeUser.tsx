import { useQuiz } from "./Quiz Context/quizContext";
import { Link } from "react-router-dom";
import { Header } from "./header";
import { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from '@material-ui/core/TextField'

export const WelcomeUser = () => {
  const { dispatch, setUserName, setQuizName, userName, inQuiz, quizName } = useQuiz();
  const [tempUserName, setTempUserName] = useState("");
  const [toggle, setToggle] = useState(false);
  console.log(quizName);

  return (
    <>
      <Header />
      <div className="sub-box">
      {!toggle ? (
        <div className="glass cont-1"  >
          <h1 style={{marginTop: "0"}} >Buddy, Would you like to play a quiz ?</h1>
          <h2>Help me with your name Buddy?</h2>
          <TextField onChange={(e) => setTempUserName(e.target.value)} id="outlined-basic" label="Name" variant="outlined" />
          <div>
          <Button onClick={() => {
              setUserName(tempUserName);
              setToggle(true);
            }}
           variant="contained" color="secondary">
          Goo !
          </Button>
          </div>
        </div>
      ) : null}
      <div >
      {toggle   ? (
        <div className="glass"  >
          <h1>Hello {userName}</h1>
          <h2>Buddy you have 3 quiz choices</h2>
          <div className="quizOptions">
            <button onClick={() => setQuizName("quiz1")} > Investing </button>
            <button onClick={() => setQuizName("quiz2")} > Trading </button>
            <button onClick={() => setQuizName("quiz3")} > General </button>
          </div>
            <div style={{margin:"1rem"}}>
          <Button variant="contained" color="secondary">
            <Link style={{ textDecoration: "none" }} to="/play">
              {" "}
              Lets Start{" "}
            </Link>
          </Button>
        </div>
        </div>
      ) : null}
      </div>
      </div>
    </>
  );
};
