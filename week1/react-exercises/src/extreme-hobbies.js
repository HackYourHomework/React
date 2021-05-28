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
function Hobbies({ hobby }) {
  return <p>{hobby}</p>;
}
export default HobbyList;
