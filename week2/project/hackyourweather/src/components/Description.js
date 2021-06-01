import React from 'react';

const Description = ({ props }) => {
  const { main, description } = props;
  return (
    <div>
      <p>{main}</p>
      <p>{description}</p>
    </div>
  );
};

export default Description;
