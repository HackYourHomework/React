import { useState } from 'react';
import { Input } from 'semantic-ui-react';
import Cityweather from './City';

const Search = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [emptyCityName, setEmptyCityName] = useState(false);
  const [invalidRequest, setInvalidRequest] = useState(false);

  const getCityWeather = async () => {
    setIsError(false);
    setIsLoading(true);

    if (city) {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_OPENWEATHER_API_URL}/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}`,
        );
        if (!response.ok) {
          setWeather();
          setEmptyCityName(false);
          setInvalidRequest(true);
          setIsLoading(false);
        } else {
          const weatherData = await response.json();
          setWeather([...weather, weatherData]);
          setEmptyCityName(false);
          setInvalidRequest(false);
        }
      } catch (error) {
        setIsError(true);
        setEmptyCityName(false);
        setInvalidRequest(false);
      }
    } else {
      setEmptyCityName(true);
    }
    setIsLoading(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getCityWeather();
    setCity('');
  };

  const handleKeyPress = (e) => {
    //If a user presses enter on the keyboard
    if (e.nativeEvent.keyCode === 13) {
      getCityWeather('');
      setCity('');
      e.preventDefault();
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          className="search-bar"
          value={city}
          placeholder="Search City"
          onChange={(e) => setCity(e.target.value)}
          onKeyDown={handleKeyPress}
        />
        <Input type="submit" value="Search" />
      </form>
      {isError === true && <h3>Something went wrong!</h3>}
      {isLoading === true && <div>Loading...</div>}
      {weather && <Cityweather weather={weather} />}
      {invalidRequest && (
        <p>City name Not found, please enter a correct city name!</p>
      )}
      {emptyCityName && <p>Please enter a city name!</p>}
    </div>
  );
};

export default Search;
