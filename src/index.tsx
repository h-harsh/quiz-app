import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { QuizProvider } from "./Components/Quiz Context/quizContext";
import { AuthProvider } from "./Components/Auth/authContext";
import { BrowserRouter as Router } from "react-router-dom";
import {ChakraProvider} from "@chakra-ui/react"

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ChakraProvider>
      <AuthProvider>
        <QuizProvider>
          <App />
        </QuizProvider>
      </AuthProvider>
      </ChakraProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
