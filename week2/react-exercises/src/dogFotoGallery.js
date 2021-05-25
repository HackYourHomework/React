import React, { useState, useEffect } from "react";
let preventFirstRender = false;
const DogGallery = () => {
  const [dogPhotos, setDogPhotos] = useState([]);

  useEffect(() => {
    getDogPhoto();
  }, []);

  const getDogPhoto = async () => {
    if (preventFirstRender) {
      const res = await fetch("https://dog.ceo/api/breeds/image/random");
      const data = await res.json();
      setDogPhotos([...dogPhotos, data.message]);
    }
  };

  return (
    <div>
      {<Button getDogPhoto={getDogPhoto} />}
      <div>
        {dogPhotos.length === 0 && (
          <div>get your first dog by clicking the button</div>
        )}
      </div>
      <div>
        {dogPhotos.length !== 0 &&
          dogPhotos.map((dogPhoto) => {
            return <DogPhoto dogPhoto={dogPhoto} />;
          })}
      </div>
    </div>
  );
};

const DogPhoto = ({ dogPhoto }) => {
  return <img src={dogPhoto} alt="pic of a dog" />;
};

const Button = ({ getDogPhoto }) => {
  return (
    <div>
      <button
        onClick={() => {
          preventFirstRender = true;
          getDogPhoto();
        }}
      >
        get a Dog
      </button>
    </div>
  );
};
export default DogGallery;
