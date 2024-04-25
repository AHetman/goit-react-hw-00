const Feedback = (click) => {
  return (
    <>
      <p>Good:{click.good}</p>
      <p>Neutral:{click.neutral}</p>
      <p>Bad:{click.bad}</p>
    </>
  );
};

export default Feedback;
