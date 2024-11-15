function FinishScreen({ ans,numQuestions,points, maxPossiblePoints }) {
  const percentage = (points / maxPossiblePoints) * 100;
  
function refreshPage() {
    window.location.reload(false);
}
  return (<div className="flex flex-col justify-center items-center">
    <div className="flex flex-col justify-center items-center result mx-4 mt-8 mb-6 p-4">
      <h4>You scored <strong>{points}</strong> points out of{" "}
        {maxPossiblePoints} ({Math.ceil(percentage)}%).
      </h4>
      <h4>You answered <strong>{ans}</strong> questions out of {numQuestions} correctly.</h4>
    </div>
      <button
        className="btn btn-ui mx-4"
        onClick={() => refreshPage()}
      >
        Restart quiz
      </button>
    </div>
  );
}
export default FinishScreen;