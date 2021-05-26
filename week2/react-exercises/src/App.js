import React from "react";
import Friend from "./components/ex1/Friend";
import Dog from "./components/ex2/DogGallery";

const App = () => {
  return (
    <>
      <div className="container">
        <Friend />
      </div>
      <div className="container">
        <Dog />
      </div>
    </>
  );
};

export default App;
