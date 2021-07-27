import axios from 'axios'

export const baseurl = "https://fin-quiz-be.herokuapp.com"

// type userQuizData = userQuizDatas[]

// type userQuizDatas = {
//     quizName:String,
//      score:Number
// }

export const postScore = async (token, quizName, score) => {
    try{
        const response = await axios.post(`${baseurl}/quiz`,{quizName, score})
        console.log(response.data)
        return null
    }catch(error){
        console.log(error)
    }
} 