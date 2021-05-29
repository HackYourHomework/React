import React from 'react';
import Hobby from './Hobby';

const HobbyList = () => {
  const hobbies = [
    'Surfing',
    'Rock climbing',
    'Mountain biking',
    'Breakdancing',
  ];

  return (
    <div>
      <ul>
        {hobbies.map((hobby) => (
          <Hobby hobby={hobby} key={hobby} />
        ))}
      </ul>
    </div>
  );
};

export default HobbyList;
