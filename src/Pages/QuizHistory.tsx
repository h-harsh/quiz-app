import { useQuiz } from "../Components/Quiz Context/quizContext"
import { useEffect } from "react"
import { useAuth } from "../Components/Auth/authContext"

export const QuizHistory = () => {
    const {state, fetchUserData} = useQuiz()
    const {token} = useAuth()
// console.log(state.user.userData)
    useEffect(() => {
        (async function(){
             fetchUserData()
        })()
    }, [token])
    return(
        <>
        <h1>Hii</h1>
        {
            state.user?.userData.map(item => {
                return(
                    <>
                    <h2>Quiz Name: {item.quizName}</h2>
                    <h2>Score: {item.score}</h2>
                    </>
                )
            })
        }
        </>
    )
}