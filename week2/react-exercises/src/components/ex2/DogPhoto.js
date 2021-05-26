import React from "react";

const DogPhoto = ({ photo }) => {
  return (
    <div>
      <img src={photo} alt="dog" />
    </div>
  );
};

export default DogPhoto;
