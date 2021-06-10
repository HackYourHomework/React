import { useState } from 'react';
import Button from './Button';
import DogPhoto from './DogPhoto';

const DogGallery = () => {
  const [dogPhotos, setDogPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorVariable, setError] = useState(false);

  const getDogPhoto = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://dog.ceo/api/breeds/image/random');
      const data = await response.json();
      setDogPhotos([...dogPhotos, data.message]);
      setLoading(false);
    } catch (error) {
      setError(`This error ${error} happened.`);
      setLoading(false);
    }
  };

  return (
    <div>
      {!errorVariable &&
        dogPhotos.map((dogPhoto, index) => {
          return <DogPhoto dogPhoto={dogPhoto} key={index} />;
        })}
      {loading && <div>Loading...</div>}
      {errorVariable && <div>{errorVariable}</div>}
      <Button onClick={getDogPhoto}></Button>
      <hr />
    </div>
  );
};

export default DogGallery;
