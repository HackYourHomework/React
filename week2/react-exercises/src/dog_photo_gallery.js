import React, { useState, useEffect } from "react";
let firstLoading = false;

const DogGallery = () => {
    const [dogPhotos, setDogPhotos] = useState([ ]);
    useEffect(() => {
    getDogPhoto();
    }, []);

    async function getDogPhoto () {
    if (firstLoading){
    try {
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await response.json();
    setDogPhotos([...dogPhotos, data.message]);
        }
    catch (err) {
    throw err
    };
};
};

return (
    <div>

    {<button onClick={() => { firstLoading = true; getDogPhoto() }}> Get a dog! </button>}
    {dogPhotos.length === 0 && ( <p> get your first dog by clicking the button </p> )}

    <div>
    {dogPhotos.length !== 0 && dogPhotos.map((dogPhoto) => {
        return <img src={dogPhoto} alt="Dog ..."  />;
        })}
    </div>

    </div>
);
};


export default DogGallery;