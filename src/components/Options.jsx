function Options({ question, dispatch, answer }) {
  const hasAnswered = answer !== null;
  question["options"]=question["optString"].split("/");
      let r=question["options"][question.correctOption];
  let s=question["options"][answer];
  return (
    <div>
      {s}
      <br/>
      {r}<br/>
      {question.difficulty}<br/>
    <div className="flex flex-col">
    {question.options.map((option, index) => (
        <button style={{border:"1px solid darkred",borderRadius:"12px"}}
          className={`m-4 btn btn-option ${index === answer ? r==s?"answerc" : "answerw":""} ${
            hasAnswered
              ? index === question.correctOption
                ? "answerc"
                : "wrong"
              : ""
          }`}
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