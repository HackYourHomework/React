import "./App.css";
import City from "./component/city";
import cityWeather from "./city-weather.json";

function App() {
  return (
    <div className="App">
      <h2> Weather </h2>
      {cityWeather.map((city) => (
        <City
          key={city.weather[0].id}
          name={city.name}
          country={city.sys.country}
          weatherMain={city.weather[0].main}
          weatherDesc={city.weather[0].description}
          maxTemp={city.main.temp_max}
          minTemp={city.main.temp_min}
          longitude={city.coord.lon}
          latitude={city.coord.lat}
        />
      ))}
    </div>
  );
}

export default App;
