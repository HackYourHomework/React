import React, { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);
    const feedBack = count > 10 ? "it's higher than 10 " : "Keep counting...";
  
 return (
    <div>
      <Count count={count} feedBack={feedBack} />
      <Button setCount={setCount} count={count} />
    </div>
    );
  };
  
const Count = ({ count, feedBack }) => {
  return (
    <div>
      <p>{count}</p>
      <p>{feedBack}</p>
    </div>
    );
  };
  
const Button = ({ setCount, count }) => {
    return <button className="add_btn" onClick={() => setCount(count + 1)}>add 1</button>;
  };

  
export default Counter;