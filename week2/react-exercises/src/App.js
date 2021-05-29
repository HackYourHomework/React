import React from "react";
import Header from "./components/Header";
import Friend from "./components/ex1/Friend";
import Dog from "./components/ex2/DogGallery";
import RandomJoke from "./components/ex3/RandomJoke";

const App = () => {
  return (
    <>
      <div className="container">
        <Header title="New friend on demand" />
        <Friend />
      </div>
      <div className="container">
        <Header title="Dog photo gallery" />
        <Dog />
      </div>
      <div className="container">
        <Header title="Random Joke Generator" />
        <RandomJoke />
      </div>
    </>
  );
};

export default App;
