import { Link } from "react-router-dom"
import { useQuiz } from "../Quiz Context/quizContext"

export const QuizSelectionBox = () => {
    const {fetchQuizData}  = useQuiz()
    return(
        <>
        <div>
            <h2>Quiz Name: Finance testing</h2>
            <Link to="/rules">
            <button
            onClick={() => fetchQuizData("60fa7e5b8c40bc1484cd4ac9")}
            >Click to play</button>
            </Link>
        </div>
        <div>
            <h2>Quiz Name: Investors Quiz</h2>
            <Link to="/rules">
            <button
            onClick={() => fetchQuizData("60fa7f4898c7de2c44b3e8a5")}
            >Click to play</button>
            </Link>
        </div>
        <div>
            <h2>Quiz Name: General Quiz</h2>
            <Link to="/rules">
            <button
            onClick={() => fetchQuizData("60fa7f5d5852701a10d1b48c")}
            >Click to play</button>
            </Link>
        </div>
        </>
    )
}