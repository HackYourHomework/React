import React from "react";

const hobbies = ["Surfing", "Rock climbing", "Mountain biking", "Breakdancing"];

export default function HobbyList() {
  return (
    <div>
      {hobbies.map((hobby, index) => (
        <div key={index}>
          {index}
          <h3>{hobby}</h3>
        </div>
      ))}
    </div>
  );
}
