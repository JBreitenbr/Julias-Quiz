import './App.css'
import { useState, useEffect,useReducer} from 'react'
import Loader from './components/Loader'
import StartScreen from './components/StartScreen.jsx'
import Question from './components/Question.jsx'
import NextButton from './components/NextButton.jsx'
import FinishScreen from './components/FinishScreen.jsx'
import {shuffle} from './shuffle.js'

  const initialState = {
  questions: [],
  // 'loading', 'error', 'ready', 'active', 'finished'
  status: "loading",
  index: 0,
  answer: null,
  points: 0,
  highscore: 0,
  secondsRemaining: null,
  maxPoints:0,
  ans:0
};
let SECS_PER_QUESTION=5; 
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
        secondsRemaining: state.questions.length * SECS_PER_QUESTION,
      };
    case "newAnswer":
      const question = state.questions.at(state.index);
      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === question.correctOption
            ? state.points + question.points
            : state.points,
        ans:action.payload===question.correctOption?state.ans+1:state.ans,
        maxPoints:state.questions.reduce(
    (prev, cur) => prev + cur.points,
    0)
      };
    case "nextQuestion":
      return { ...state, index: state.index + 1, answer: null };
    case "finish":
      return {
        ...state,
        status: "finished",
        highscore:
          state.points > state.highscore ? state.points : state.highscore,
      };
  }}
export default function App() {
  const [
    { questions, status, index, answer, points, highscore, secondsRemaining,maxPoints,ans },
    dispatch,
  ] = useReducer(reducer, initialState);  
const [numQuestions,setNumQuestions]=useState(10);
const maxPossiblePoints = questions.reduce(
    (prev, cur) => prev + cur.points,
    0
  );
const [cat,setCat]=useState("");
const handleCat = (event) => {
setCat(event.target.value);
};
const handleNum = (event) => {
  setNumQuestions(event.target.value)
}
const [timed,setTimed]=useState(false);
const handleTimed = (event) => setTimed(event.target.checked);
let v;
if(cat.length>0){
  v=(item)=>item.category==cat;
} else {
  v=(item)=>item;
}
  useEffect(function () {
    fetch("https://raw.githubusercontent.com/JBreitenbr/psychic-meme/refs/heads/main/questions.json")
      .then((res) => res.json())
      .then((data) =>dispatch({
          type: "dataReceived",payload:
        shuffle(data["questions"]).filter(v).slice(0,numQuestions)}))
.catch((err) => dispatch({ type: "dataFailed" }))
  }, [cat]);
  return (
    <div className="wrapper">{status === "loading" && <Loader />}{status === "ready" && <StartScreen dispatch={dispatch} numQuestions={numQuestions} handleNum={handleNum} cat={cat} handleCat={handleCat} timed={timed} handleTimed={handleTimed} />}{status === "active" && (<div><h2>
        Question <strong>{index + 1}</strong> / {numQuestions}
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
                points={points}
                maxPossiblePoints={maxPoints}
                highscore={highscore}
                dispatch={dispatch}
              />
            )}
    </div>
  )
}
