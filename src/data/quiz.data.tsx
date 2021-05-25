import {Quiz} from './quizdata.types'

export const quizData: Quiz = {
    quizName: "Finance Testing",
    difficulty: "Beginner",
    questions: [
        {
            question: "If you want to buy a specifuc stock at your preferred price, Which order would you place?",
            points: 3,
            options: [
                {
                    text: "Stoploss",
                    isRight: false
                },
                {
                    text: "Market",
                    isRight: false
                },
                {
                    text: "Limit",
                    isRight: true
                }
            ]
        },
        {
            question: "Which order would you place for long term holding ?",
            points: 3,
            options: [
                {
                    text: "Bracket order",
                    isRight: false
                },
                {
                    text: "CNC",
                    isRight: true
                },
                {
                    text: "MIS",
                    isRight: false
                }
            ]
        },
        {
            question: "Who was the father of Harshad Mheta",
            points: 3,
            options: [
                {
                    text: "Shantilal Mheta",
                    isRight: true
                },
                {
                    text: "Ashwin Mheta",
                    isRight: false
                },
                {
                    text: "Ganjendra Mheta",
                    isRight: false
                }
            ]
        },
        {
            question: "Who was the lawyer of Harshad Mheta ?",
            points: 3,
            options: [
                {
                    text: "Naray KhrishnMurthy",
                    isRight: false
                },
                {
                    text: "Jignesh Reddy",
                    isRight: false
                },
                {
                    text: "Ram Jetmalani",
                    isRight: true
                }
            ]
        }
    ]
}