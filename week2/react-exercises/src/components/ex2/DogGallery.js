import React, { useState } from "react";
import Button from "./Button";
import DogPhoto from "./DogPhoto";

const DogGallery = () => {
  const [dogPhotos, setDogPhotos] = useState([]);
  const getDogPhoto = async () => {
    try {
      const resp = await fetch("https://dog.ceo/api/breeds/image/random");
      const data = await resp.json();
      setDogPhotos([...dogPhotos, data.message]);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <Button getDogPhoto={getDogPhoto} />
      <div className="profile">
        {dogPhotos.length ? (
          dogPhotos.map((photo) => <DogPhoto photo={photo} />)
        ) : (
          <p>Get your first dog by clicking the button!</p>
        )}
      </div>
    </>
  );
};

export default DogGallery;
