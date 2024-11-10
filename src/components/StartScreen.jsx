function StartScreen({dispatch, cat, handleCat,timed,handleTimed }) {
let cats=["Literature","Philosophy","Biology","History","Geography","Movies","Music","Literature","Computer Science","Mathematics"];
                                    
  return (
    <div className="start">
      <h1>Julias Super Quiz</h1>
      <h2>Have lots of fun!</h2>
      <select value={cat} onChange={handleCat} style={{color:"navy",borderRadius:"12px"}} className="p-4 m-6"><option style={{color:"navy"}}>Select a category</option>{cats.map(item=><option  value={item}>{item}</option>)}</select><br/>
      <input type="checkbox" id="timer" checked={timed} onChange={handleTimed} /><label htmlFor="timer"> Timer set?</label><br/>
      <button
        className="btn btn-ui" onClick={() => dispatch({ type: "start" })}
      >
        Let's start
      </button>
    </div>
  );
}

export default StartScreen;