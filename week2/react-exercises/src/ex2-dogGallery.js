import React, { useState } from 'react';

function DogGallery() {
  const [dogPhotos, setDogPhotos] = useState([]);
  function getDogPhoto() {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((response) => response.json())
      .then((data) => setDogPhotos((prevData) => [...prevData, data.message]));
  }

  let gallery;
  if (dogPhotos.length > 0) {
    gallery = dogPhotos.map((url) => {
      return <DogPhoto url={url} key={url} />;
    });
  }

  return (
    <div>
      <h2>Exercise 2: Dog photo gallery</h2>
      <Button getDogPhoto={getDogPhoto} />
      {gallery}
    </div>
  );
}

function DogPhoto({ url }) {
  return <img src={url} alt="" height="200px" />;
}

function Button({ getDogPhoto }) {
  return (
    <div>
      <button style={{ marginBottom: '10px' }} onClick={() => getDogPhoto()}>
        <h1>Get a dog!</h1>
      </button>
    </div>
  );
}

export default DogGallery;
