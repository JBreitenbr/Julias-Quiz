import Star from './Star'
//import { useState } from 'react'
function Options({ question, dispatch, answer,width }) {
  const hasAnswered = answer !== null;
  question["options"]=question["optString"].split("/");
  let diffDic={"easy":<div  className="flex sm">Difficulty: &nbsp;<Star/></div>,"medium":<div className="flex sm">Difficulty: &nbsp;<Star/><Star/></div>,"hard":<div className="flex sm">Difficulty: &nbsp;<Star/><Star/><Star/></div>}
      let r=question["options"][question.correctOption];
  let s=question["options"][answer];
  return (<div>
<div className="flex flex-col m-4"><div className="text-xl sm:text-2xl lg:text-3xl">Category: {question.category}</div>{width<1000?<div className="text-xl">{diffDic[question["difficulty"]]}</div>:<div className="text-2xl lg:text-3xl">Difficulty:&nbsp;{question["difficulty"]}</div>}</div>
    <div className="flex flex-col">
    {question.options.map((option, index) => (
        <button className={`m-2 btn btn-option text-xl sm:text-2xl lg:text-3xl ${
            hasAnswered
              ? index === question.correctOption && r!=s
                ? "answer-right-unselected"
                : ""
              : ""
          } ${index === answer ? r==s?"answer-right-selected" : "answer-wrong":""}`}
          key={index}
          disabled={hasAnswered}
          onClick={() => dispatch({ type: "newAnswer", payload: index })}
        >
          {option}
        </button>
      ))}</div>
    </div>
  );
}

export default Options;