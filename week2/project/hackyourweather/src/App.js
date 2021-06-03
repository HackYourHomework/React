import './App.css';
import React, { useState } from 'react';
import CityBox from './components/CityBox';

function App() {
  const [city, setCity] = useState('');
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
      setCity(data);
      setLoading(false);
    } catch (error) {
      setError(`This error ${error} happened.`);
      setLoading(false);
    }
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
      {!errorVariable && city && <CityBox cityData={city} />}
    </div>
    // <div>
    //   {cityData.map((data) => {
    //     return (
    //       <div className="box" key={data.id}>
    //         <City city={data.name} country={data.sys.country} />
    //         <Description
    //           main={data.weather[0].main}
    //           description={data.weather[0].description}
    //         />
    //         <Temperature min={data.main.temp_min} max={data.main.temp_max} />
    //         <Location lon={data.coord.lon} lat={data.coord.lat} />
    //       </div>
    //     );
    //   })}
    // </div>
  );
}

export default App;
