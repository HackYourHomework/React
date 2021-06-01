import React, { useState, useEffect } from "react";

const Joke = (props) => {
  const [answer, setAnswer] = useState(null);
  const { joke } = props;
  const getAnswer = (ans) => setTimeout(() => setAnswer(ans), 3000);
  useEffect(() => {
    if (joke?.punchline) getAnswer(joke.punchline);
  }, [joke]);
  return (
    <div className="Joke">
      <p>{joke.setup}</p>
      <p>{answer}</p>
    </div>
  );
};
export default Joke;
