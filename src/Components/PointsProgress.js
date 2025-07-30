function PointsProgress({
  questionIndex,
  numQuestions,
  points,
  maxPoints,
  answer,
}) {
  return (
    <header className="progress">
      <progress
        max={numQuestions}
        value={questionIndex + Number(answer !== null)}
      />
      <p>
        Question <strong>{questionIndex + 1}</strong>/{numQuestions}
      </p>
      <p>
        <strong>
          {points}/{maxPoints} points
        </strong>
      </p>
    </header>
  );
}

export default PointsProgress;
