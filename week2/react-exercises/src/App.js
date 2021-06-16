import React from "react";
import Friend from "./components/ex1/Friend";
import DogGallery from "./components/ex2/DogGallery";
import RandomJoke from "./components/ex3/RandomJoke";

const App = () => {
  return (
    <>
      <div className="container">
        <h2>New friend on demand</h2>
        <Friend />
      </div>
      <div className="container">
        <h2>Dog photo gallery</h2>
        <DogGallery />
      </div>
      <div className="container">
        <h2>Random Joke Generator</h2>
        <RandomJoke />
      </div>
    </>
  );
};

export default App;
