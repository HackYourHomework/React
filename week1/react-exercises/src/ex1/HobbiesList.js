import React from "react";
import Hobbies from "./Hobbies";

const HobbyList = () => {
  const hobbies = [
    "Surfing",
    "Rock climbing",
    "Mountain biking",
    "Break-dancing",
  ];
  return (
    <ul>
      {hobbies.map((hobby) => (
        <Hobbies key={hobbies.indexOf(hobby)} props={hobby} />
      ))}
    </ul>
  );
};
export default HobbyList;
