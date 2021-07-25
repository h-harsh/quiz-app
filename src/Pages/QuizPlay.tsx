import { NewQuestionDisplay } from "../Components/Question Display/questionDisplay";

export const QuizPlay = () => {
 
  return (
    <>
      <div className="sub-box">
          <div className="glass" style={{ padding: "2rem" }}>
            <NewQuestionDisplay/>
          </div>
      </div>
    </>
  );
};
