import QuestionMark from "./QuestionMark";
function StartScreen({dispatch, cat, handleCat,numQuestions, handleNum}) {
let cats=["Literature","Philosophy","Biology","History","Geography","Movies","Music","Linguistics","Computer Science","Mathematics"];
let nums=[5,10,15,20];                                  
  return (
    <div className="start flex flex-col items-center">
      <h1 className="text-4xl sm: text-5xl lg:text-6xl mt-6">Quiz App</h1><QuestionMark/>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl">Have lots of fun!</h2>
      <select value={cat} onChange={handleCat} className="text-slate-800 p-4 m-6 rounded-3xl text-xl sm: text-2xl lg:text-3xl sel"><option>Select a category</option>{cats.map(item=><option  value={item} key={item}>{item}</option>)}</select><br/><div className="flex"><p className="quest-num text-xl sm:text-2xl lg:text-3xl">Number of questions:&nbsp;&nbsp;</p>
      <select value={numQuestions} onChange={handleNum} className="text-slate-800 p-2 rounded-3xl text-xl sm:text-2xl sel mg:text-3xl">{nums.map(item=><option value={item} key={item}>{item}</option>)}</select></div><br/>
      <button
        className="btn float-right text-xl sm:text-2xl mg:text-3xl" onClick={() => dispatch({ type: "start" })}
      >
        Let's start
      </button>
    </div>
  );
}

export default StartScreen;