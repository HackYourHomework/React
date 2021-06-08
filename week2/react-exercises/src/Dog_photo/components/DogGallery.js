import React, { useState } from "react";
import Button from "./Button";
import DogPhoto from "./DogPhoto";

function DogGallery() {
  const [dogPhotos, setDogPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  async function getDogPhoto() {
    try {
      setIsLoading(true);
      const response = await fetch("https://dog.ceo/api/breeds/image/random");
      const data = await response.json();
      setDogPhotos((prevState) => [...prevState, data.message]);
    } catch (error) {
      setIsError(true);
    } finally {
      setIsError(false);
      setIsLoading(false);
    }
  }

  return (
    <section>
      <div>
        <Button getDogPhoto={getDogPhoto} />
      </div>
      {isLoading && <p>Loading...</p>}
      {isError && <p>ERROR</p>}
      <div>
        {dogPhotos.length > 0 ? (
          dogPhotos.map((dogPhoto, index) => (
            <DogPhoto dogPhoto={dogPhoto} key={index} />
          ))
        ) : (
          <p>Get your first dog by clicking the button!</p>
        )}
      </div>
    </section>
  );
}

export default DogGallery;
