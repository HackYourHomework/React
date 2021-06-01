import React, { useState } from "react";
import DogPhoto from "./DogPhoto";
import Button2 from "./Button2";

function DogGallery() {
  const [dogPhotos, setDogPhotos] = useState([]);

  const getDogPhoto = () => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((data) => {
        setDogPhotos((dogPhotos) => [...dogPhotos, data.message]);
      });
  };
  const message =
    dogPhotos.length === 0
      ? "Get your first dog by clicking the button!"
      : "Keep going...";
  return (
    <div className="DogGallery">
      <p>{message}</p>
      <Button2 getDogPhoto={getDogPhoto} />
      {dogPhotos.length > 0 &&
        dogPhotos.map((dogPhoto, index) => <DogPhoto dogPhoto={dogPhoto} />)}
    </div>
  );
}

export default DogGallery;
