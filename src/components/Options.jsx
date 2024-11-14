import Star from './Star'
function Options({ question, dispatch, answer }) {
  const hasAnswered = answer !== null;
  question["options"]=question["optString"].split("/");
  let diffDic={"easy":<h2 className="flex">Difficulty: &nbsp;<Star/></h2>,"medium":<h2 className="flex">Difficulty: &nbsp;<Star/>&nbsp;&nbsp;<Star/></h2>,"hard":<h2 className="flex">Difficulty &nbsp;<Star/>&nbsp;&nbsp;<Star/>&nbsp;&nbsp;<Star/></h2>}
      let r=question["options"][question.correctOption];
  let s=question["options"][answer];
  return (<div>
<div className="flex flex-col m-4"><h2>Category: {question.category}</h2><div>{diffDic[question["difficulty"]]}</div></div>
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