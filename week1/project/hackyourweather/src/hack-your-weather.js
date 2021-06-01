import React, { useState, useEffect } from "react";

const KEY = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;

function TheWeather  () {
    const [searchCity, setSearchCity] = useState(" ");
    const [city, setCity] = useState({ });

    useEffect(() => {
    fetchCity();
    }, []);

    async function fetchCity   () {
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=${KEY}`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        setCity(data);   
    }
    catch (err) {
        throw err;
    }
};

function changeSearchCity (event)  {
    setSearchCity(event.target.value);
};

return (
    <div>
    <h1> Weather </h1>  
    <div className="input">
        <input value={searchCity} onChange={changeSearchCity} />
        <button onClick={() => { fetchCity() }}> Search </button>
    </div>

    {city.name === undefined && <div> No city has been searched yet .... </div>}
    {city.name !== undefined && (
        <div className="city-weather">
        <h2> {city.name}, {city.sys.country} </h2>
        <h2> {city.weather[0].main} </h2>
        <h3> {city.weather[0].description}</h3> 
        <h3> Min Temp : {(city.main.temp_min -272.15).toFixed(2)} </h3>
        <h3> Max Temp : {(city.main.temp_max -272.15).toFixed(2)} </h3>
        <h3> Location (lon-lat) : {city.coord.lon} - {city.coord.lat} </h3>
        </div>
    )}
    </div>
);
};

export default TheWeather;
