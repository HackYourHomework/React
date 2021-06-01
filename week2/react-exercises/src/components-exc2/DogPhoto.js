import React from 'react';

const DogPhoto = (props) => {
  return (
    <div>
      <img src={props.dogPhoto} alt="DogPhoto" style={{ width: '400px' }} />
    </div>
  );
};

export default DogPhoto;
