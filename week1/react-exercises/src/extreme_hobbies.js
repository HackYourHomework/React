import React from 'react';

function HobbyList() {
  const hobbies = [
    'Surfing',
    'Rock climbing',
    'Mountain biking',
    'Breakdancing',
  ];

  return (
    <div>
      {hobbies.map((hobby, key) => {
        return <Hobbies key={key} hobby={hobby} />;
      })}
    </div>
  );
}

function Hobbies(props) {
  const { hobby, key } = props;
  return (
    <ul>
      <li>
        {key} - {hobby}
      </li>
    </ul>
  );
}

export default HobbyList;
