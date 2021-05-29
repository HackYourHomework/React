import React, { useState } from 'react';
import WeatherForecast from './components/WeatherForecast';
import { MdSearch } from 'react-icons/md';

function App() {
  const [city, setCity] = useState();
  const [isError, setError] = useState(false);

  function Input() {
    const [inputCity, setInputCity] = useState();
    return (
      <div id="input-btn">
        <div className="input">
          <i>
            <MdSearch />
          </i>
          <form>
            <label>
              <input
                name="name"
                type="text"
                onChange={(e) => {
                  setInputCity(e.target.value);
                }}
                placeholder="Search City"
              />
            </label>
          </form>
        </div>

        <Button FetchCity={FetchCity} inputCity={inputCity} />
      </div>
    );
  }

  async function FetchCity({ inputCity }) {
    try {
      const response = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${inputCity}&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}`,
      );
      if (!response.ok) {
        throw Error;
      }
      const data = await response.json();
      setCity(data);
    } catch (error) {
      setError('Something went wrong');
    }
  }
  return (
    <div className="container">
      {isError && <p>{isError}</p>}
      {!isError && (
        <div>
          <h1 style={{ textAlign: 'center' }}>Weather</h1>
          <Input />
          {city && <WeatherForecast city={city} />}
        </div>
      )}
    </div>
  );
}
function Button({ FetchCity, inputCity }) {
  return (
    <div>
      <button
        className="btn"
        type="submit"
        onClick={() => {
          FetchCity({ inputCity });
        }}
      >
        Search
      </button>
    </div>
  );
}

export default App;
