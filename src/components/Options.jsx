import Star from './Star'
import { useState } from 'react'
function Options({ question, dispatch, answer }) {
  const hasAnswered = answer !== null;
  question["options"]=question["optString"].split("/");
  let diffDic={"easy":<h3 className="flex">Difficulty: &nbsp;<Star/></h3>,"medium":<h3 className="flex">Difficulty: &nbsp;<Star/><Star/></h3>,"hard":<h3 className="flex">Difficulty: &nbsp;<Star/><Star/><Star/></h3>}
      let r=question["options"][question.correctOption];
  let s=question["options"][answer];
  return (<div>
<div className="flex flex-col m-4"><h3>Category: {question.category}</h3><div>{diffDic[question["difficulty"]]}</div></div>
    <div className="flex flex-col">
    {question.options.map((option, index) => (
        <button className={`m-2 btn btn-option  ${
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