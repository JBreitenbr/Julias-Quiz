import {useState} from 'react';
import Options from "./Options";

function Question({ question, dispatch, answer }) {let [width, setWidth]=useState(window.innerWidth);

  return (
    <div>
      <div className="text-center mt-6 mb-4 text-xl sm:text-2xl">{question.question}</div>
      <Options question={question} dispatch={dispatch} answer={answer} width={width}/>
    </div>
  );
}

export default Question;