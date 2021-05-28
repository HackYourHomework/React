import React, { useState, useContext, useEffect } from "react";
import { GlobalContext } from "../context/dataContext";
let preventEarlerFetch = false;
const MY_KEY = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;

const AddCity = () => {
  const [searchCity, setSearchCity] = useState("");

  const { addCity } = useContext(GlobalContext);

  let apiError = "";

  useEffect(() => {
    handleFindCity();
  }, []);

  const handleFindCity = async () => {
    try {
      if (preventEarlerFetch) {
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=${MY_KEY}`;
        const res = await fetch(url);
        const data = await res.json();

        const newCity = {
          id: data.id,
          name: data.name,
          country: data.sys.country,
          weather: data.weather[0].main,
          description: data.weather[0].description,
          minTemp: data.main.temp_min,
          maxTemp: data.main.temp_max,
          lonLocation: data.coord.lon,
          latLocation: data.coord.lat,
        };

        addCity(newCity);
      }
    } catch (err) {
      apiError = "can't connect to the API";
    }
  };

  const handleSearchCity = (e) => {
    setSearchCity(e.target.value);
  };
  return (
    <>
      <input value={searchCity} onChange={handleSearchCity} />
      <button
        onClick={() => {
          preventEarlerFetch = true;
          handleFindCity();
        }}
      >
        weather
      </button>
      <p>{apiError}</p>
    </>
  );
};

export default AddCity;
