import {useState} from 'react';
import Options from "./Options";

function Question({ question, dispatch, answer }) {let [width, setWidth]=useState(window.innerWidth);
//let [height, setHeight]=useState(window.innerHeight);
  return (
    <div>
      <div className="text-center mt-6 mb-4 quest">{question.question}</div>
      <Options question={question} dispatch={dispatch} answer={answer} width={width}/>
    </div>
  );
}

export default Question;