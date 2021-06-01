import './App.css';
import React, { useState, useRef, useEffect } from 'react';

function City({ cityData }) {
  return (
    <div
      style={{
        border: '1px solid black',
        width: '40%',
        margin: '30px',
        textAlign: 'left',
        paddingLeft: '30px',
      }}
    >
      <h3>
        {cityData.name}, {cityData.sys.country}
      </h3>
      <p>
        <b>{cityData.weather[0].main}</b>
      </p>
      <p style={{ marginBottom: '10px' }}>{cityData.weather[0].description}</p>

      <p>min temp: {(cityData.main.temp_min - 273.15).toFixed(2)}</p>
      <p>max temp: {(cityData.main.temp_max - 273.15).toFixed(2)}</p>
      <p style={{ marginBottom: '10px' }}>
        location: {cityData.coord.lon}, {cityData.coord.lat}
      </p>
    </div>
  );
}

function SearchCity() {
  let [cityName, setCityName] = useState('');
  let [cityData, setCityData] = useState('');
  let cityRef = useRef();
  let [err, setErr] = useState('');

  const submitButton = () => {
    setCityName(cityRef.current.value);
  };
  useEffect(() => {
    if (cityName) {
      fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}`,
      )
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else throw new Error('This city is not found');
        })
        .then((data) => {
          setCityData(data);
        })
        .catch((error) => {
          setErr(() => error.message);
        });
    }
  }, [cityName]);
  let cityDataDiv;
  if (cityData) {
    cityDataDiv = <City cityData={cityData} />;
  }
  return (
    <div>
      <h2>Weather</h2>

      <h3>{err}</h3>
      <input ref={cityRef} type="text" placeholder="Search City" />
      <button onClick={submitButton}>Search</button>
      {cityDataDiv}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <SearchCity />
    </div>
  );
}

export default App;
