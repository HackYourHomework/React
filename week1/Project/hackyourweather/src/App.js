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
          city={city}
        />
      ))}
    </div>
  );
}

export default App;
