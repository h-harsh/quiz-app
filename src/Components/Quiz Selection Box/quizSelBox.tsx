import { Link } from "react-router-dom";
import { useQuiz } from "../Quiz Context/quizContext";
import "./quizSelBox.css";
import {
  TertiaryButton,
} from "../../New Components";

export const QuizSelectionBox = () => {
  const { fetchQuizData } = useQuiz();
  return (
    <div className="sel-box-container ">
      <div className="common-box-sel cb-custom only-card ">
        <h1> Finance testing</h1>
        <Link to="/rules">
          <TertiaryButton
            text="Play"
            clickHandler={() => fetchQuizData("60fa7e5b8c40bc1484cd4ac9")}
          />
        </Link>
      </div>
      <div className="common-box-sel cb-custom only-card">
        <h1> Investors Quiz</h1>
        <Link to="/rules">
          <TertiaryButton
            text="Play"
            clickHandler={() => fetchQuizData("60fa7f4898c7de2c44b3e8a5")}
          />
        </Link>
      </div>
      <div className="common-box-sel cb-custom only-card">
        <h1> General Quiz</h1>
        <Link to="/rules">
          <TertiaryButton
            text="Play"
            clickHandler={() => fetchQuizData("60fa7f5d5852701a10d1b48c")}
          />
        </Link>
      </div>
    </div>
  );
};
