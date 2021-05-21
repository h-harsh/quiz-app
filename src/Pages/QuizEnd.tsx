import { Link } from 'react-router-dom'
import {useQuiz} from '../Components/Cont/quizContext'

export const QuizEnd = () => {
    const { dispatch, state } = useQuiz()
    return(
        <>
            <h1>Okay By bye Tata Khel Khatm</h1>
            <h2>Score iz {state.score}</h2>
            <Link to="/" >Home</Link>


        </>
    )
}