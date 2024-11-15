import Options from "./Options";

function Question({ question, dispatch, answer }) {
  return (
    <div>
      <div className="text-center mt-6 mb-4 quest">{question.question}</div>
      <Options question={question} dispatch={dispatch} answer={answer} />
    </div>
  );
}

export default Question;