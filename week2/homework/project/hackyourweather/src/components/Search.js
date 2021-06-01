import { useState } from "react";
import { Input } from 'semantic-ui-react';
import Cityweather from "./City";

const Search = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const getCityWeather = async () => {
    setIsError(false);
    setIsLoading(true);
    
    try {
      const response = await fetch(`${process.env.REACT_APP_OPENWEATHER_API_URL}/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}`)
      const weatherData = await response.json();
      setWeather([...weather, weatherData])
    } catch (error) {
      setIsError(true);
    }

    setIsLoading(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCity('');
  };

  const handleKeyPress = (e) => {
    if (e.nativeEvent.keyCode === 13) {
      getCityWeather('');
      setCity('');
      e.preventDefault();
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Input type="text" className="search-bar" value={city} placeholder="Search City"
          onChange={e => setCity(e.target.value)}
          onKeyDown={handleKeyPress}
        />
        <Input type='submit' value='Search' onClick={getCityWeather} />
      </form>
      { isError === true && <h3>Something went wrong!</h3>}
      { isLoading === true && <div>Loading...</div>}
      { weather.length > 0 && <Cityweather weather={weather} /> }
    </div>
  );
}
 
export default Search;