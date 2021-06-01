import { useState } from "react";

const DogGallery = () => {
  const [dogPhotos, setDogPhotos] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  
  const getDogPhoto = async () => {
    try {
      const url = 'https://dog.ceo/api/breeds/image/random';
      const response = await fetch(url);
      const data = await response.json();
      setDogPhotos([...dogPhotos, data.message]);
    } catch (error) {
      setError(true); 
    }
    setLoading(false)
  }
    
  return (
    <div>
      {<Button onClick={getDogPhoto} />}
      <div>
        {loading === true && <div className="loader"></div>}
        {dogPhotos.length === 0 && <h3>Get your first dog by clicking the button</h3>}
      </div>
      {error && <p>Cant fetch your dogs</p>}
      <div className='dog-images'>
        {dogPhotos.length !== 0 && dogPhotos.map((dogPhoto, index) => {
          return <DogPhoto dogPhoto={dogPhoto} key={index} />
        })}
      </div>
    </div>
  );
};

const DogPhoto = (props) => {
  return <img className='doggie' src={props.dogPhoto} alt='dog' />
}

const Button = (props) => {
  return (
    <div>
      <button className='button' onClick={props.onClick}>Get a Dog</button>
    </div>
  )
}
 
export default DogGallery;