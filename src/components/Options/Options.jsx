const Options = (updateFeedback) => {
  return (
    <>
      <button onClick={() => updateFeedback}>Good</button>
      <button onClick={() => updateFeedback}>Neutral</button>
      <button onClick={() => updateFeedback}>Bad</button>
    </>
  );
};

export default Options;