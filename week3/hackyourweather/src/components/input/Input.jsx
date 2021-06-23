import { useState } from 'react';
import Button from '../button/Button';
import CardList from '../card-list/CardList';

import './Input.css';

const Input = () => {
  const [city, setCity] = useState(``);
  const [weatherData, setWeatherData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState({ error: false });

  const handleError = (message) => setIsError({ error: true, message });

  const removeCity = (id, data) => {
    const newCityList = weatherData.filter((city) => city.id !== id);

    setWeatherData([...newCityList]);
  };

  const showWeather = async (ev) => {
    ev.preventDefault();

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}
`;

    try {
      setIsLoading(true);

      if (isError.error) setIsError({ error: false });

      const resp = await fetch(url);
      if (!resp.ok) throw Error(`Something went wrong!`);
      const data = await resp.json();

      setWeatherData([
        data,
        ...weatherData.filter((city) => city.id !== data.id),
      ]);
    } catch (err) {
      handleError(`Please enter a valid city name!`);
    } finally {
      setIsLoading(false);
      setCity(``);
    }
  };

  return (
    <div>
      <form onSubmit={(ev) => showWeather(ev)}>
        <input
          type="text"
          name="city"
          value={city}
          placeholder="Search city"
          onChange={(ev) => setCity(ev.target.value)}
        />

        <Button disabled={!city} />
      </form>

      {isLoading && <p>Loading...</p>}

      {isError.error && <p>{isError.message}</p>}

      {!isLoading && !isError.error && (
        <CardList weatherData={weatherData} removeCity={removeCity} />
      )}
    </div>
  );
};

export default Input;
