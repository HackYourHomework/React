import './App.css';
import { useState, useRef, useEffect } from 'react';

function City({ cityData, citiesData }) {
  const [newCities, setNewCities] = useState(citiesData);
  function removeItem(item) {
    setNewCities((oldItems) => {
      const newArr = [...oldItems.filter((i) => i !== item)];
      console.log('newArr', newArr);
      return newArr;
    });

    return <CityList citiesData={newCities} />;
  }
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
      <button
        onClick={() => removeItem(cityData)}
        style={{ float: 'right', margin: '5px' }}
      >
        x
      </button>
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
function CityList({ citiesData }) {
  console.log('citiesData', citiesData);
  return (
    <div style={{ textAlign: 'center' }}>
      {citiesData.map((city) => {
        return (
          <div key={city.id}>
            <City cityData={city} citiesData={citiesData} />
          </div>
        );
      })}
    </div>
  );
}
function SearchCity() {
  let [citiesData, setCitiesData] = useState([]);
  let cityRef = useRef();
  let [err, setErr] = useState('');

  const submitButton = () => {
    getCity(cityRef.current.value);
  };
  function getCity(cityName) {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}`,
    )
      .then((response) => {
        if (response.ok) {
          setErr('');
          return response.json();
        } else throw new Error('This city is not found');
      })
      .then((data) => {
        const newCities = [data, ...citiesData];
        setCitiesData(newCities);
      })
      .catch((error) => {
        setErr(() => error.message);
      });
  }

  return (
    <div>
      <h2>Weather</h2>
      <h3>{err}</h3>
      <input ref={cityRef} type="text" placeholder="Search City" />
      <button onClick={submitButton}>Search</button>

      {citiesData.length > 0 && <CityList citiesData={citiesData} />}
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
