import React from "react";

function Hobby({ hobby }) {

  return (
    <>
      <li>{hobby}</li>
    </>
  );
}

function HobbyList() {
  const hobbies = [
    "Surfing",
    "Rock climbing",
    "Mountain biking",
    "Breakdancing",
  ];

  return (
    <div>
      <div>
        <h1> My Hobby List</h1>
      </div>

      <div>
        {hobbies.map((hobby, index) => {
          return <Hobby key={index} hobby={hobby} />;
        })}
      </div>
    </div>
  );
}

export default HobbyList;
