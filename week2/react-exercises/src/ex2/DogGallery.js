import React, { useState, useEffect } from "react";

const DogGallery = () => {
  const [dogPhotos, setDogPhotos] = useState([]);
  useEffect(() => {
    getDogPhoto();
  }, []);

  const getDogPhoto = () => {
    return fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((data) => {
        setDogPhotos([...dogPhotos, data.message]);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <Button getDogPhoto={getDogPhoto} />
      {dogPhotos.map((dogPhoto) => (
        <DogPhoto dogPhoto={dogPhoto} />
      ))}
    </div>
  );
};

const DogPhoto = ({ dogPhoto }) => {
  return <img src={dogPhoto} alt="dog pic" />;
};

const Button = ({ getDogPhoto }) => {
  return (
    <div>
      <button onClick={getDogPhoto}> Get a Dog!</button>
    </div>
  );
};
export default DogGallery;
