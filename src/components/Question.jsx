import Options from "./Options";

function Question({ question, dispatch, answer }) {
  return (
    <div className="question-container">
      <div className="quest-size text-center mt-6 mb-4">{question.question}</div>
      <Options question={question} dispatch={dispatch} answer={answer} />
    </div>
  );
}

export default Question;