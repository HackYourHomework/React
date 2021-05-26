import React from 'react';
import { v4 as uuid } from 'uuid';
import './HobbyList.css';

const hobbies = [`Surfing`, `Rock climbing`, `Mountain biking`, `Breakdancing`];
const Hobby = ({ hobby }) => <li>{hobby}</li>;

const HobbyList = () => {
  return (
    <ul>
      {hobbies.map((hobby) => (
        <Hobby key={uuid()} hobby={hobby} />
      ))}
    </ul>
  );
};

export default HobbyList;
