import { QuizSelectionBox } from '../Components/Quiz Selection Box/quizSelBox'
export const Home = () => {
    return(
        <div className='home-outer' >
        <h1 className='main-page-data' >Welcome to  Quizify</h1>
        <h2>Select a quiz to play</h2>
        <QuizSelectionBox/>
        </div>
    )
}