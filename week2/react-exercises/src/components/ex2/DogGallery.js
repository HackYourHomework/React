import React, { useState } from "react";
import Button from "../Button";
import DogPhoto from "./DogPhoto";

const DogGallery = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [dogPhotos, setDogPhotos] = useState([]);
  const getDogPhoto = async () => {
    setLoading(true);
    try {
      const resp = await fetch("https://dog.ceo/api/breeds/image/random");
      const data = await resp.json();
      if (!resp.ok) {
        throw new Error(data.message);
      }
      setLoading(false);
      setError(false);
      setDogPhotos([...dogPhotos, data.message]);
    } catch (err) {
      setLoading(false);
      setError(err.message);
      setDogPhotos([...dogPhotos]);
      console.log(err);
    }
  };

  return (
    <>
      <Button text={"Get a dog!"} onClick={getDogPhoto} />
      {error ? (
        <h1>{error}</h1>
      ) : loading ? (
        <h1>loading ...</h1>
      ) : dogPhotos.length ? (
        <div className="profile">
          {dogPhotos.map((photo) => (
            <DogPhoto photo={photo} />
          ))}
        </div>
      ) : (
        <h5>Get your first dog by clicking the button!</h5>
      )}
    </>
  );
};

export default DogGallery;
