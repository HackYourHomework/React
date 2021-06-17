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

  const showWeather = async (ev) => {
    ev.preventDefault();

    if (!city) return handleError(`City name cannot be blank!`);

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}
`;

    try {
      setIsLoading(true);

      const resp = await fetch(url);
      if (!resp.ok) throw Error;
      const data = await resp.json();

      setWeatherData([data]);

      setIsError({ error: false });
    } catch (err) {
      handleError(`Please enter a valid city name!`);
    } finally {
      setCity(``);
      setIsLoading(false);
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

        <Button />
      </form>

      {isLoading && <p>Loading...</p>}

      {isError.error && <p>{isError.message}</p>}

      {!isLoading && !isError.error && <CardList weatherData={weatherData} />}
    </div>
  );
};

export default Input;
