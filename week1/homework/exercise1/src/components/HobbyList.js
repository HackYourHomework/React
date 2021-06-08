import React from 'react';
import Hobbies from './Hobbies';

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
          <Hobbies hobby={hobby} key={hobby} />
        ))}
      </ul>
    </div>
  );
};

export default HobbyList;
