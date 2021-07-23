export type Option = {
    text: string,
    isRight: boolean,
    isUserSelected: boolean
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

// export type Quiz = {
//     questions: (Questions[] | {
//         options: (Option[] | undefined)[] | undefined;
//         question?: string | undefined;
//         points?: number | undefined;
//     } | undefined)[];
//     quizName?: string | undefined;
//     difficulty?: string | undefined;
//   }