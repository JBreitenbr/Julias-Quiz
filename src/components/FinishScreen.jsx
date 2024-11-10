function FinishScreen({ ans,numQuestions,points, maxPossiblePoints, highscore, dispatch }) {
  const percentage = (points / maxPossiblePoints) * 100;
  
function refreshPage() {
    window.location.reload(false);
}
  return (
    <div className="result_container">
      <p className="result">
       You scored <strong>{points}</strong> out of{" "}
        {maxPossiblePoints} ({Math.ceil(percentage)}%)
      </p>
      <p>You answered <strong>{ans}</strong> questions out of {numQuestions} correctly.</p>
      {/* <p className="highscore">(Highscore: {highscore} points)</p>*/}
      
      <button
        className="btn btn-ui"
        onClick={() => /*dispatch({ type: "restart" })*/refreshPage()}
      >
        Restart quiz
      </button>
    </div>
  );
}
export default FinishScreen;