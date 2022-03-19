import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { baseurl } from "../utils/apiCalls";

export const LeaderBoard = () => {
  const [leaderBoardData, setLeaderBoardData] = useState([]);
  // const [data, setData] = useState();

  // useEffect(() => {
  //   (async function(){
  //       const response = await axios.get(`${baseurl}/quiz/quiz/leaderboard`)
  //       console.log(response.data.data)
  //       setLeaderBoardData(response.data.data)
        
  //   })()
  // }, []);

// const settingData = (leaderBoardData) = {
//   setData(leaderBoardData.map(item =>{
//      item.userData.map(item2 => {
//       return{name:item.fullName,
//       quizName:item2.quizName,
//       score:item2.score}
//     })
//   }))
// }

//   const sortLeaderBoard = (userData) => {
//     return userData.sort((a,b) => a.score - b.score)
//   }

//     console.log(sortLeaderBoard)
  return (
    <>
      <h1>Global LeaderBoard</h1>
      {
          leaderBoardData.length > 0 ? (
            leaderBoardData.map(item => {
                return(<>
                <h3>NAme: {item.fullName}</h3>
                {item.userData.map(item2 => {
                  
                    return(<>
                    <p>QuizName: {item2.quizName}</p>
                    <p>Score: {item.score}</p>
                    </>)
                })}
                </>)
            })
          ): ( <h1>Currently you don't have access to Global LeaderBoard</h1> )
      }
    </>
  );
};
