import { QuizSelectionBox } from '../Components/Quiz Selection Box/quizSelBox'
export const Home = () => {
    return(
        <>
        <h1 style={{fontSize:"3rem", fontWeight:'bolder'}} >Welcome to Finance Quiz Master</h1>
        <h2>Select a quiz to play</h2>
        <QuizSelectionBox/>
        </>
    )
}