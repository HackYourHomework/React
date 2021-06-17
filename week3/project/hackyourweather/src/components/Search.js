import { useState, useEffect, useRef } from "react";
import { Input } from 'semantic-ui-react';
import useFetch from "../hooks/useFetch";
import Cityweather from "./City";

const Search = () => {
  const [city, setCity] = useState("");
  const inputRef = useRef(null);
  const url = `${process.env.REACT_APP_OPENWEATHER_API_URL}/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}`;
  const { isLoading, isError, notFound, cityList, setCityList,
    setNotFound, fetchWeatherInfo } = useFetch(url);


  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeatherInfo();
    setCity('');
  };

  const handleKeyPress = (e) => {
    if (e.nativeEvent.keyCode === 13) {
      e.preventDefault();
      fetchWeatherInfo();
      setCity('');  
    }
  }

  const handleChange = (e) => {
    setCity(e.target.value)
    setNotFound(false);
  }
  
  useEffect(() => {
    inputRef.current.focus();
  });

  const deleteCity = (cityId) => {
    setCityList(cityList.filter((city) => city.id !== cityId));
  };

  return (
    <div>
      <h1>Weather App</h1>
      <form onSubmit={handleSubmit}>
        <Input type="text" value={city} placeholder="Search City" ref={inputRef}
          onChange={handleChange}
          onKeyDown={handleKeyPress}
        />
        <Input type='submit' value='Search' />
      </form>
      { isError && <h3>Something went wrong!</h3> }
      { isLoading && <div>Loading...</div> }
      { city && notFound && (<p>City Name Not Found, Please Enter Correct City Name!</p>) }
      { cityList.map((city) => (<Cityweather key={city.id} deleteCity={deleteCity} city={city} />)) }
    </div>
  );
}
 
export default Search;