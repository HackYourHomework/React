import { useState } from 'react';
import './DogGallery.css';

const DogGallery = () => {
  const [dogPhotos, setDogPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const getDogPhoto = () => {
    setIsLoading(true);
    return fetch('https://dog.ceo/api/breeds/image/random')
      .then((res) => res.json())
      .then((data) => setDogPhotos([...dogPhotos, data.message]))
      .catch(() => setIsError(true))
      .finally(() => setIsLoading(false));
  };

  return (
    <div className="container">
      <button onClick={getDogPhoto}>Get a dog!</button>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Oops something went wrong!</p>}
      {dogPhotos.length === 0 && <p>Get your first dog!</p>}
      <div className="gallery">
        {!isError &&
          dogPhotos.map((photo, idx) => (
            <img src={photo} alt="dog" key={idx} />
          ))}
      </div>
    </div>
  );
};

export default DogGallery;
