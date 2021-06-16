import React, { useState } from "react";
import Button from "../Button";
import DogPhoto from "./DogPhoto";

const DogGallery = () => {
  const [notification, setNotification] = useState(
    `Get your first dog by clicking the button!`
  );

  const [dogPhotos, setDogPhotos] = useState([]);

  const getDogPhoto = async () => {
    try {
      setNotification(`Loading...`);
      const resp = await fetch("https://dog.ceo/api/breeds/image/random");
      const data = await resp.json();
      if (!resp.ok) {
        throw new Error(data.message);
      } else {
        setNotification(``);
        setDogPhotos([data.message, ...dogPhotos]);
      }
    } catch (err) {
      setNotification(err.message);
      console.log(err);
    }
  };

  return (
    <div>
      <Button text="Get a dog!" onClick={getDogPhoto} />
      {notification && <h4>{notification}</h4>}
      {dogPhotos && (
        <article className="profile">
          {dogPhotos.map((photo, index) => (
            <DogPhoto key={index} photo={photo} />
          ))}
        </article>
      )}
    </div>
  );
};

export default DogGallery;
