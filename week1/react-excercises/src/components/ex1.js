import React from 'react';

const HobbyList = () => {
  
  const hobbies = ['Surfing', 'Rock climbing', 'Mountain biking', 'Breakdancing'];
  
  return (
    <div className='hobbies'>
      {hobbies.map((hobby, index) => {
        return (
          <Hobbies key={index}
            hobby={hobby}
          />
        )
      })}
    </div>
  )
}

const Hobbies = ({hobby}) => <p>{hobby}</p>;

export default HobbyList
