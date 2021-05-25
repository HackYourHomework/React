import './App.css';
import cities from './city-weather.json';

function City({ city }) {
  return (
    <div
      style={{
        border: '1px solid black',
        width: '40%',
        margin: '30px',
        textAlign: 'left',
        paddingLeft: '30px',
        paddingTop: '0',
        paddingBottom: '0',
      }}
    >
      <h3>
        {city.name}, {city.sys.country}
      </h3>
      <p>
        <b>{city.weather[0].main}</b>
      </p>
      <p>{city.weather[0].description}</p>
      <p>&nbsp;</p>
      <p>min temp: {(city.main.temp_min - 273.15).toFixed(2)}</p>
      <p>max temp: {(city.main.temp_max - 273.15).toFixed(2)}</p>
      <p>
        location: {city.coord.lon}, {city.coord.lat}
      </p>
      <p>&nbsp;</p>
    </div>
  );
}

function CityList() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Weather</h2>
      {cities.map((city) => {
        return (
          <div key={city.id}>
            <City city={city} />
          </div>
        );
      })}
    </div>
  );
}
function App() {
  return (
    <div className="App">
      <CityList />
    </div>
  );
}

export default App;
