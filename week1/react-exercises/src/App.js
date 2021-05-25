import React from "react";
import "./App.css";


import HobbyList from "./components/Hobbies";
import Guarantee from "./components/Guarantee";
import Counter from "./components/Counter";


function App() {
  return (
    <div>
      <div className="App">
        <HobbyList />
      </div>

      <div>
        <Guarantee />
      </div>
      
      <div>
        <Counter />
      </div>
    </div>
  );
}

export default App;
