import './App.css'
import { useState, useEffect,useReducer} from 'react'
import Loader from './components/Loader'
import StartScreen from './components/StartScreen.jsx'
import Question from './components/Question.jsx'
import NextButton from './components/NextButton.jsx'
import FinishScreen from './components/FinishScreen.jsx'
import {shuffle} from './shuffle.js'
  const diffToPoints = {
  easy: 10,
  medium: 20,
  hard: 30,
}
  const initialState = {
  questions: [],
  status: "loading",
  index: 0,
  answer: null,
  pnts: 0,
  hlp:0,
  highscore: 0,
  maxPoints:0,
  ans:0
};

function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return {
        ...state,
        questions: action.payload,
        status: "ready",
      };
    case "dataFailed":
      return {
        ...state,
        status: "error",
      };
    case "start":
      return {
        ...state,
        status: "active",
      };
    case "newAnswer":
      const question = state.questions.at(state.index);
      return {
        ...state,
        answer: action.payload,
        pnts:
          action.payload === question.correctOption
            ? state.pnts + diffToPoints[question.difficulty]
            : state.pnts,
        ans:action.payload===question.correctOption?state.ans+1:state.ans,
 hlp:state.hlp+diffToPoints[question.difficulty],       maxPoints:state.hlp+diffToPoints[question.difficulty],
      };
    case "nextQuestion":
      return { ...state, index: state.index + 1, answer: null };
    case "finish":
      return {
        ...state,
        status: "finished",
      };
    default:
      throw new Error("Action unknown");
  }}
export default function App() {
  const [
    { questions, status, index, answer, pnts, maxPoints,ans },
    dispatch,
  ] = useReducer(reducer, initialState);  

const [numQuestions,setNumQuestions]=useState(20);

const [cat,setCat]=useState("");
const handleCat = (event) => {
setCat(event.target.value);
};
const handleNum = (event) => {
  setNumQuestions(event.target.value)
}

let v;
if(cat.length>0){
  v=(item)=>item.category==cat;
} else {
  v=(item)=>item;
}
  useEffect(function () {
    fetch("https://raw.githubusercontent.com/JBreitenbr/Julias-Quiz/refs/heads/main/src/QuizData/questions.json")
      .then((res) => res.json())
      .then((data) =>dispatch({
          type: "dataReceived",payload:
        shuffle(data["questions"]).filter(v).slice(0,numQuestions)}))
.catch((err) => dispatch({ type: "dataFailed" }))
  }, [cat]);
  return (
    <div className="wrapper">{status === "loading" && <Loader />}{status === "ready" && <StartScreen dispatch={dispatch} numQuestions={numQuestions} handleNum={handleNum} cat={cat} handleCat={handleCat} />}{status === "active" && (<div><h2 className="text-center mt-6">
        Question {index + 1} / {numQuestions}
      </h2><Question
                  question={questions[index]}
                  dispatch={dispatch}
                  answer={answer}
                /><NextButton
                    dispatch={dispatch}
                    answer={answer}
                    numQuestions={numQuestions}
                    index={index}
                  /></div>)}{status === "finished" && (
              <FinishScreen
                ans={ans}
                numQuestions={numQuestions}
                points={pnts}
                maxPossiblePoints={maxPoints}
              />
            )}
    </div>
  )
}
