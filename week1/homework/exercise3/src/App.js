// import React, { useState } from 'react';
import './App.css';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <Counter />
      {/* <p>{count}</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Add 1
      </button>
      {count > 10 && <p>It's higher than 10!</p>}
      {count > 0 && count < 11 && <p>Keep counting...</p>} */}
    </div>
  );
}

export default App;
