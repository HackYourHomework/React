import './App.css';
import { useState, useRef, useEffect, useContext, createContext } from 'react';
const CitiesContext = createContext();
function CitiesProvider(props) {
  const [citiesData, setCitiesData] = useState([]);
  return (
    <CitiesContext.Provider value={[citiesData, setCitiesData]}>
      {props.children}
    </CitiesContext.Provider>
  );
}

function City({ cityData }) {
  const [citiesData, setCitiesData] = useContext(CitiesContext);
  function removeItem(item) {
    setCitiesData((oldItems) => {
      return [...oldItems.filter((i) => i !== item)];
    });
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
function CityList() {
  const [citiesData, setCitiesData] = useContext(CitiesContext);
  if (citiesData.length > 0) {
    return (
      <div style={{ textAlign: 'center' }}>
        {citiesData.map((city) => {
          return (
            <div key={city.id}>
              <City cityData={city} />
            </div>
          );
        })}
      </div>
    );
  } else return <div></div>;
}
function SearchCity() {
  const [citiesData, setCitiesData] = useContext(CitiesContext);
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
    </div>
  );
}

function App() {
  return (
    <CitiesProvider>
      <div className="App">
        <SearchCity />
        <CityList />
      </div>
    </CitiesProvider>
  );
}

export default App;
