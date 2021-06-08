import React, { useState } from 'react';
import WeatherForecast from './components/WeatherForecast';
import SearchInput from './components/SearchInput';

function App() {
  const [city, setCity] = useState();
  const [isError, setError] = useState(false);

  async function fetchCity({ inputCity }) {
    try {
      const response = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${inputCity}&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}`,
      );
      if (!response.ok) {
        throw Error(`An error has occurred: ${response.status}`);
      }

      const data = await response.json();
      setCity(data);
    } catch (error) {
      setError(error.message);
    }
  }
  return (
    <div className="container">
      {isError && <p>{isError}</p>}
      {!isError && (
        <div>
          <h1 style={{ textAlign: 'center' }}>Weather</h1>
          <SearchInput fetchCity={fetchCity} />
          {city && <WeatherForecast city={city} />}
          {!city && (
            <p style={{ textAlign: 'center' }}>No city has been chosen yet</p>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
