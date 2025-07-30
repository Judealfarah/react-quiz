function NextButton({ dispatch, answer, numQuestions, questionIndex }) {
  if (answer === null) return;

  if (questionIndex < numQuestions - 1) {
    return (
      <div>
        <button
          className="btn btn-ui"
          onClick={() => dispatch({ type: "onNextClicked" })}
        >
          Next
        </button>
      </div>
    );
  }

  if (questionIndex === numQuestions - 1) {
    return (
      <div>
        <button
          className="btn btn-ui"
          onClick={() => dispatch({ type: "onFinish" })}
        >
          Finish
        </button>
      </div>
    );
  }
}

export default NextButton;
