import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { baseurl } from "../utils/apiCalls";

export const LeaderBoard = () => {
  const [leaderBoardData, setLeaderBoardData] = useState([]);

  useEffect(() => {
    (async function(){
        const response = await axios.get(`${baseurl}/quiz/quiz/leaderboard`)
        console.log(response.data.data)
        setLeaderBoardData(response.data.data)
    })()
  }, []);
    
  return (
    <>
      <h1>All quiz played</h1>
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
          ): ( <h1>Error</h1> )
      }
    </>
  );
};
