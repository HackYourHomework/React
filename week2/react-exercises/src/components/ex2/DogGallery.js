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
      setDogPhotos([data.message, ...dogPhotos]);
    } catch (err) {
      setLoading(false);
      setError(err.message);
      setDogPhotos([...dogPhotos]);
      console.log(err);
    }
  };

  return (
    <div>
      <Button text="Get a dog!" onClick={getDogPhoto} />
      {error && <h1>{error}</h1>}
      {loading && <h1>loading...</h1>}
      {dogPhotos && (
        <article className="profile">
          {!dogPhotos.length && (
            <h5>Get your first dog by clicking the button!</h5>
          )}
          {dogPhotos.map((photo, index) => (
            <DogPhoto key={index} photo={photo} />
          ))}
        </article>
      )}
    </div>
  );
};

export default DogGallery;
