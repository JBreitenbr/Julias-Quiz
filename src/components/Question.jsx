import Options from "./Options";

function Question({ question, dispatch, answer }) {
  return (
    <div className="question-container">
      <h3 className="text-center mt-6 mb-4">{question.question}</h3>
      <Options question={question} dispatch={dispatch} answer={answer} />
    </div>
  );
}

export default Question;