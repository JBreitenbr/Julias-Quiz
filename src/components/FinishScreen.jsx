function FinishScreen({ ans,numQuestions,points, maxPossiblePoints }) {
  const percentage = (points / maxPossiblePoints) * 100;
  
function refreshPage() {
    window.location.reload(false);
}
  return (
    <div className="flex flex-col justify-center items-center">
      <p className="result">
       You scored <strong>{points}</strong> out of{" "}
        {maxPossiblePoints} ({Math.ceil(percentage)}%)
      </p>
      <p>You answered <strong>{ans}</strong> questions out of {numQuestions} correctly.</p>
      
      <button
        className="btn btn-ui"
        onClick={() => refreshPage()}
      >
        Restart quiz
      </button>
    </div>
  );
}
export default FinishScreen;