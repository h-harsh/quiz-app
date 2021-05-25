import { Link } from "react-router-dom";
import { useQuiz } from "./Quiz Context/quizContext";
import HomeIcon from '@material-ui/icons/Home';

export const Header = () => {
  const { state } = useQuiz();
  return (
    <>
    <div style={{background: "whitesmoke", margin: "0", padding: "0"}} >
      <h1 style={{margin: "0", padding: "1.5rem", textDecoration: "none"}} > <Link to="/" > <HomeIcon /> Quiz Master</Link> </h1>
      </div>
    </>
  );
};
