import React from "react";

function HobbyList() {
  const hobbies = [
    "Surfing",
    "Rock climbing",
    "Mountain biking",
    "Breakdancing",
  ];

  return (
    <div>
      {hobbies.map((hobby, index) => {
        return <Hobbies key={index} hobby={hobby} />;
      })}
    </div>
  );
}

function Hobbies(props) {
  const { hobby } = props;
  return (
    <ul className="list">
      <li>{hobby}</li>
    </ul>
  );
}

export default HobbyList;
