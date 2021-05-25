export type InitialStateType = {
  score: number;
  questionNo: number;
  ansStatus: string;
  wrongAnswered: number[];
};

export type payloadObj = {
  text: string;
  isRight: boolean;
};

export type ACTION =
  | { type: "NEXT_QUESTION"; payload: string }
  | { type: "CHECK"; payload: payloadObj }
  | { type: "RESET" }
  | { type: "END_QUIZ" }
  | {type: 'CHECKS', payload:{item: payloadObj, item2:}}
