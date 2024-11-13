import Star from './Star'
function Options({ question, dispatch, answer }) {
  const hasAnswered = answer !== null;
  question["options"]=question["optString"].split("/");
  let diffDic={"easy":<div className="flex">Difficulty: &nbsp;<Star/></div>,"medium":<div className="flex">Difficulty: &nbsp;<Star/><Star/></div>,"hard":<div className="flex">Difficulty &nbsp;<Star/><Star/><Star/></div>}
      let r=question["options"][question.correctOption];
  let s=question["options"][answer];
  return (<div>
<div className="flex flex-col m-4"><p>Category: {question.category}</p><p>{diffDic[question["difficulty"]]}</p></div>
    <div className="flex flex-col">
    {question.options.map((option, index) => (
        <button style={{border:"1px solid darkred",borderRadius:"12px"}}
          className={`m-2 btn btn-option  ${
            hasAnswered
              ? index === question.correctOption && r!=s
                ? "answerd"
                : "wrong"
              : ""
          } ${index === answer ? r==s?"answerc" : "answerw":""}`}
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