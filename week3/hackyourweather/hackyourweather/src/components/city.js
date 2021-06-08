import React, { useState } from "react";
import {Link} from 'react-router-dom';
const KEY = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;
let firstLoading = false;

function TheWeather  () {
    const [searchCity, setSearchCity] = useState(" ");
    const [city, setCity] = useState([]);
    const [cities, setCities] = useState ([]);

    // useEffect(() => {
    //     console.log(city)
    //     fetchCity();
    // }, []);

    async function fetchCity   () {
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=${KEY}`;
    try {
        if (firstLoading){
        const response = await fetch(url);
        if(!response.ok){
            throw new Error('city is not found');
        }
        else{
        const data = await response.json();
        setCity(data);
     //   console.log(data);    
        const found = cities.some(city => city.name === data.name);
        if (!found) setCities([data, ...cities]);
     //   console.log(cities);
     //   console.log(city)
}
}
}
    catch (err) {
        throw err;
    }
};

function changeSearchCity (event)  {
    setSearchCity(event.target.value);
};

function deleteCity({ id }) {
    let newCityList = cities.filter((city) => city.id !== id);
    setCities(newCityList);
    return <div></div>;
}

return (
    <div>
    <h1> Weather </h1>  
    <div className="input">
        <input value={searchCity} onChange={changeSearchCity} />
        <button onClick={() => { firstLoading=true; fetchCity() }}> Search </button>
    </div>

    <div>
    {cities.length === 0 && <div> No city has been searched yet .... </div>}
    {cities.length !== 0 && cities.map((item) => {
        return <div className="city-weather">
        <h2> {item.name}  </h2>
        <h2> {item.weather[0].main} </h2>
        <h3> {item.weather[0].description}</h3>
        <h3> Min Temp : {(city.main.temp_min -272.15).toFixed(2)} </h3>
        <h3> Max Temp : {(city.main.temp_max -272.15).toFixed(2)} </h3>
        <h3> Location : {city.coord.lon} - {city.coord.lat} </h3>
        <Link to={`/${item.id}`}>
        <p style={{ color: "yellow" }}>5 day forecast</p>
        </Link>
        <button className="dlt-btn" onClick={() => deleteCity(item)}>X</button>
        </div> ;
        })}
    </div>

    </div>
);
};

export default TheWeather;