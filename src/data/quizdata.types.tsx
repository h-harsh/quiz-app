export type Option = {
    text: string,
    isRight: boolean
}

export type Questions = {
    question: string,
    points: number,
    options: Option[]
}

export type Quiz = {
    quizName: string,
    difficulty: string,
    questions: Questions[]
}