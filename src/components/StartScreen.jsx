function StartScreen({dispatch, cat, handleCat,numQuestions, handleNum}) {
let cats=["Literature","Philosophy","Biology","History","Geography","Movies","Music","Literature","Computer Science","Mathematics"];
let nums=[5,10,15,20];                                  
  return (
    <div className="start flex flex-col items-center">
      <h1 className="m-4">Julias Super Quiz</h1>
      <h2>Have lots of fun!</h2>
      <select value={cat} onChange={handleCat} style={{color:"navy",borderRadius:"12px"}} className="p-4 m-6"><option style={{color:"navy"}}>Select a category</option>{cats.map(item=><option  value={item}>{item}</option>)}</select><br/><div className="flex"><p>Number of questions:&nbsp;&nbsp;</p>
      <select value={numQuestions} onChange={handleNum}>{nums.map(item=><option value={item}>{item}</option>)}</select></div><br/>
      <button
        className="btn btn-ui" onClick={() => dispatch({ type: "start" })}
      >
        Let's start
      </button>
    </div>
  );
}

export default StartScreen;