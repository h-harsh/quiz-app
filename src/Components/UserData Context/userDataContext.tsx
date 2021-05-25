import  { createContext, useContext, useReducer } from "react";
import React from 'react'
import {userDataReducer} from './userDataReducer'
import {InitailStateReducer, ACTION} from './userData.types'

const userDataInitailState : InitailStateReducer = {
    currentQuiz: '',
    quizStatus: false,
    userName: "",
    quizData: undefined
}


type UserDataContextType = { 
    userState: InitailStateReducer,
    userDispatch: (action: ACTION) => void
}

const userDataContextValue : UserDataContextType = {
    userState: userDataInitailState,
    userDispatch: () => null
}



const UserDataContext = createContext<UserDataContextType>(userDataContextValue);

export const UserDataProvider: React.FC = ({children}) => {

const [userState, userDispatch] = useReducer(userDataReducer, userDataInitailState);


    return(
        <UserDataContext.Provider value={{ userState, userDispatch}}>
            {children}
        </UserDataContext.Provider>
    )
}

export const useUserData = () => {
    return useContext(UserDataContext)
}