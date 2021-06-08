import React, { useState } from 'react';
import CityBox from './CityBox';

const CityPage = () => {
  const [cities, setCities] = useState([]);
  const [inputCity, setInputCity] = useState();
  const [loading, setLoading] = useState(false);
  const [errorVariable, setError] = useState(false);

  const getCity = async ({ inputCity }) => {
    try {
      setLoading(true);
      const response = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${inputCity}&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}`,
      );
      const data = await response.json();

      const currentCity = {
        id: data.id,
        name: data.name,
        country: data.sys.country,
        weather: data.weather[0].main,
        description: data.weather[0].description,
        temp_max: data.main.temp_max,
        temp_min: data.main.temp_min,
        lat: data.coord.lat,
        lon: data.coord.lon,
      };

      setCities([currentCity, ...cities]);
      setLoading(false);
    } catch (error) {
      setError(`This error ${error} happened.`);
      setLoading(false);
    }
  };
  const removeCity = (closeButton) => {
    var parent = closeButton.target.parentNode;
    parent.style.display = 'none';
  };
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Weather</h1>
      <input
        name="name"
        type="text"
        onChange={(e) => {
          setInputCity(e.target.value);
        }}
        placeholder="Search City"
      />
      <button
        type="submit"
        onClick={() => {
          getCity({ inputCity });
        }}
      >
        Search
      </button>
      <hr />
      {loading && <div>Loading...</div>}
      {errorVariable && <div>{errorVariable}</div>}
      {!errorVariable &&
        cities &&
        cities.map((city) => (
          <CityBox key={city.id} cityData={city} removeCity={removeCity} />
        ))}
    </div>
  );
};

export default CityPage;
