import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import WorldCities from "./cities";

function App() {
  return <WorldCities />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

export default App;
