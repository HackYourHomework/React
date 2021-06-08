import React, { useState } from 'react';
import Button from './Button';
import DogGallery from './DogGallery';

function DogPhoto() {
  const [dogPhotos, setDogPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  async function getDogPhoto() {
    try {
      setLoading(true);
      const response = await fetch('https://dog.ceo/api/breeds/image/random');
      if (!response.ok) {
        throw Error(`An error has occurred: ${response.status}`);
      }
      const data = await response.json();

      setDogPhotos((oldDogPhotos) => [...oldDogPhotos, data.message]);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  }

  return (
    <div className="App">
      {error && <p>{error}</p>}
      {!error && (
        <div>
          <Button getDogPhoto={getDogPhoto} dogPhotos={dogPhotos} />
          {dogPhotos.length === 0 && (
            <p>Get your first Dog by clicking the button</p>
          )}
          {loading && <p>Loading...</p>}
          <DogGallery dogPhotos={dogPhotos} setLoading={setLoading} />
        </div>
      )}
    </div>
  );
}

export default DogPhoto;
