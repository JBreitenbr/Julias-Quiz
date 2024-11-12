import Star from './Star'
function Options({ question, dispatch, answer }) {
  const hasAnswered = answer !== null;
  question["options"]=question["optString"].split("/");
  let diffDic={"easy":<Star/>,"medium":<><Star/><Star/></>,"hard":<><Star/><Star/><Star/></>}
      let r=question["options"][question.correctOption];
  let s=question["options"][answer];
  return (<div>
<div className="flex m-4">Difficulty: &nbsp;&nbsp;{diffDic[question["difficulty"]]}</div>
    <div className="flex flex-col">
    {question.options.map((option, index) => (
        <button style={{border:"1px solid darkred",borderRadius:"12px"}}
          className={`m-4 btn btn-option  ${
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