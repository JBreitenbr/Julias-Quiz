import QuestionMark from "./QuestionMark";
function StartScreen({dispatch, cat, handleCat,numQuestions, handleNum}) {
let cats=["Literature","Philosophy","Biology","History","Geography","Movies","Music","Linguistics","Computer Science","Mathematics"];
let nums=[5,10,15,20];                                  
  return (
    <div className="start flex flex-col items-center">
      <h1 className="mt-6">Quiz App</h1><QuestionMark/>
      <h2>Have lots of fun!</h2>
      <select value={cat} onChange={handleCat} className="text-slate-800 p-4 m-6 rounded-3xl sel"><option>Select a category</option>{cats.map(item=><option  value={item} key={item}>{item}</option>)}</select><br/><div className="flex"><p className="quest-num">Number of questions:&nbsp;&nbsp;</p>
      <select value={numQuestions} onChange={handleNum} className="text-slate-800 p-2 rounded-3xl sel">{nums.map(item=><option value={item} key={item}>{item}</option>)}</select></div><br/>
      <button
        className="btn btn-ui" onClick={() => dispatch({ type: "start" })}
      >
        Let's start
      </button>
    </div>
  );
}

export default StartScreen;