import { Link } from "react-router-dom"
import { useQuiz } from "../Components/Quiz Context/quizContext"


export const Rules = () => {
    const {dispatch, state} = useQuiz()
    return(
        <>
        <h1>Rules</h1>
        <h2>Dekh bhai khelna to khel</h2>
        <h2>30 Seconds for each question</h2>
        <h2>Skip the ones you not sure about</h2>
        <h2>Negatie marks for wrong answer</h2>
        <Link to="/play">
        <button
        onClick={() => dispatch({ type: "START_QUIZ", payload: "true" })}
        >Start Quiz</button>
        </Link>
        </>
    )
}