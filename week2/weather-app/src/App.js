import React, { useState } from "react";
import Search from "./component/Search";
import City from "./component/City";
import "./App.css";

// function App() {
//   const [cityName, setCityName] = useState("");

//   const handleCityName = (e) => {
//     setCityName(e.target.value);
//     console.log(cityName);
//   };

//   const [cityWeather, setCityWeather] = useState([]);

//   const handleSubmit = (e) => {
//     console.log("jj");
//     e.preventDefault();
//     getWeather();
//   };

//   function getWeather(cityName) {
//     setCityName(cityName);
//     return fetch(
//       `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}`
//     )
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//         console.log(cityName);
//         setCityWeather(data);
//       });
//   }
//   return (
//     <div>
//       <City cityWeather={cityWeather} />
//       <Search
//         value={cityName && cityName}
//         handleOnChange={handleCityName}
//         handleSubmit={handleSubmit}
//       />
//     </div>
//   );
// }

function App() {
  const [cityName, setCityName] = useState("");

  const handleCityName = (e) => {
    setCityName(e.target.value);
    console.log(cityName);
  };

  const [cityWeather, setCityWeather] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    getWeather();
  };

  function getWeather(cityName) {
    return fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(cityName);
        setCityWeather(data);
      });
  }
  return (
    <div className="App">
      <h2>Weather</h2>
      <Search
        value={cityName}
        onChange={handleCityName}
        handleSubmit={handleSubmit}
      />
      {cityWeather && <City props={cityWeather} />}
    </div>
  );
}

export default App;
