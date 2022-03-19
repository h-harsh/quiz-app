export type Option = {
    text: string,
    isRight: boolean,
    isUserSelected: boolean
}

export type Questions = {
    question: string,
    options: Option[] 
}

export type Quiz = {
    quizName: string,
    questions: Questions[]
}
