import React from 'react';

const hobbies = ['Surfing', 'Rock climbing', 'Mountain biking', 'Breakdancing'];

function Hobby({ hobby }) {
  return <span style={{ backgroundColor: '#ddd' }}>{hobby}</span>;
}

function HobbyList() {
  return (
    <div>
      <h2>
        <i>Exercise 1</i>
      </h2>
      {hobbies.map((hobby, index) => {
        return (
          <p key={index}>
            <Hobby hobby={hobby} />
          </p>
        );
      })}
    </div>
  );
}

export default HobbyList;
