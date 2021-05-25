import React, { useState } from "react";

function Button({ addOne }) {
  return <button onClick={addOne}>Add 1!</button>;
}
function Count({ count }) {
  return <div>{count}</div>;
}
function Counter() {
  const [count, setCount] = useState(0);
  const feedback = (count > 10) ? "It's higher than 10!" : "Keep counting...";

  function addOne() {
    setCount((prevState) => prevState + 1)
  }

  return (
    <div>
      {feedback}
      <Count count={count} />
      <Button addOne={addOne} />
    </div>
  );
}

export default Counter;

// React notes
// class components are not so common 
// If have dynamic info, use app.js to call function
// All methods which start with "use" are hooks
// Use hooks at the beginning of the code
// Can not use hooks inside flow control blocks (such as for Each, if else) 
// setCount((prevState) => prevState +1);
// setCount(count + 1) is wrong 
// resetCount() { setCount(0)} is correct