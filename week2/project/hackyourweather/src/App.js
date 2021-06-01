import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import cityData from './city-weather.json';
import City from './components/City';
import Location from './components/Location';
import Temperature from './components/Temperature';
import Description from './components/Description';
import Search from './components/Search';

function App() {
  const [city, setCity] = useState('');
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
    <div>
      <Search onClick={getCity}></Search>
      {loading && <div>Loading...</div>}
      {errorVariable && <div>{errorVariable}</div>}
      {!errorVariable && city && <City city={city} />}
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
