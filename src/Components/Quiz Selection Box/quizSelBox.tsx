import { Link } from "react-router-dom"
import { useQuiz } from "../Quiz Context/quizContext"
import './quizSelBox.css'

export const QuizSelectionBox = () => {
    const {fetchQuizData}  = useQuiz()
    return(
        <div className="sel-box-container" >
        <div className="common-box-sel cb-custom ">
            <h1> Finance testing</h1>
            <Link to="/rules">
            <button
            onClick={() => fetchQuizData("60fa7e5b8c40bc1484cd4ac9")}
            > Play</button>
            </Link>
        </div>
        <div className="common-box-sel cb-custom">
            <h1> Investors Quiz</h1>
            <Link to="/rules">
            <button
            onClick={() => fetchQuizData("60fa7f4898c7de2c44b3e8a5")}
            > Play</button>
            </Link>
        </div>
        <div className="common-box-sel cb-custom">
            <h1> General Quiz</h1>
            <Link to="/rules">
            <button
            onClick={() => fetchQuizData("60fa7f5d5852701a10d1b48c")}
            > Play</button>
            </Link>
        </div>
        </div>
    )
}