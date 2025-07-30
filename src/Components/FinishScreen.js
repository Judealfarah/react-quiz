function FinishScreen({ points, maxPoints, highscore, dispatch }) {
  const percentage = (points / maxPoints) * 100;
  return (
    <>
      <p className="result">
        You scored {points} out of {maxPoints} ({Math.ceil(percentage)}%)
      </p>
      <p className="highscore">(Highest score: {highscore})</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "onRestart" })}
      >
        Restart quiz
      </button>
    </>
  );
}

export default FinishScreen;
