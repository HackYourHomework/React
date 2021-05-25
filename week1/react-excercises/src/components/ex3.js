import React, { useState } from "react";

const Counter = () => {
  
  const [count, setCount] = useState(0);
  const feedback = count > 10 ? "It's higher than 10!" : "Keep counting...";
  
  return (
    <div>
      <h3>{feedback}</h3>
      <Count count={count}/>
      <Button onClick={() => setCount(count + 1)} />
    </div>
  )
}

const Count = ({count}) => {
  return (
    <div>{count}</div>
  )
}

const Button = ({onClick}) => {
  return (
    <button onClick={onClick}>Add 1</button>
  )
}



export default Counter;
