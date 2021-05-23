import { useQuiz } from "./Cont/quizContext";
import { Link } from "react-router-dom";
import { Header } from "./header";
import { useState } from "react";
import { ButtonBases } from "./Materialui/ButtonBases";
import Button from "@material-ui/core/Button";
import TextField from '@material-ui/core/TextField'

export const WelcomeUser = () => {
  const { dispatch, setUserName, setQuizName, userName, inQuiz } = useQuiz();
  const [tempUserName, setTempUserName] = useState("");
  const [toggle, setToggle] = useState(false);

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
            <div  >
          <ButtonBases 
            imagea={
              "https://images.unsplash.com/photo-1535320903710-d993d3d77d29?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
            }
            name={"Investor"}
            onClick={() => setQuizName("quiz1")}
          />
          
          <ButtonBases
            imagea={
              "https://images.unsplash.com/photo-1565374391015-af899382f2a6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
            }
            name={"Trading"}
            onClick={() => setQuizName("quiz2")}
          />
          </div>
          <div>
          <ButtonBases
            imagea={
              "https://images.unsplash.com/photo-1540835296355-c04f7a063cbb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
            }
            name={"General"}
            onClick={() => setQuizName("quiz3")}
          />
          </div>
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
