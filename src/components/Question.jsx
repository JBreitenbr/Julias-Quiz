import Options from "./Options";

function Question({ question, dispatch, answer }) {
  return (
    <div className="question_container">
      <h2 className="text-center mt-6 mb-4">{question.question}</h2>
      <Options question={question} dispatch={dispatch} answer={answer} />
    </div>
  );
}

export default Question;