import { useEffect, useState } from "react";

const RandomJoke = () => {
  const [joke, setJoke] = useState({});
    
  useEffect(() => {
    getJoke()
  }, [])

  const getJoke = async () => {
    const response = await fetch('https://official-joke-api.appspot.com/random_joke');
    const jokeData = await response.json();
    setJoke(jokeData);
  }
  
  return (
    <Joke joke={joke} />
  );
}

const Joke = ({joke}) => {
  return (
    <div className='card'>
      <p>{joke.setup}</p>
      <hr/>
      <p>{joke.punchline}</p>
    </div>
  )
}
 
export default RandomJoke;