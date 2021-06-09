import React, { useState, useEffect } from "react";
let earlierFetch = false;
const MY_KEY = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;

const Cityinfo = () => {
  const [City, setCity] = useState("");
  const [findCity, setFindCity] = useState({});
  const [userError, setUserError] = useState(false);

  let apiError = "";

  useEffect(() => {
    handleFindCity();
  }, []);

  const handleFindCity = async () => {
    try {
      if (earlierFetch) {
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${City}&appid=${MY_KEY}`;
        const res = await fetch(url);
        const data = await res.json();
        setFindCity(data);
        console.log(res.status);
        if (res.status === 400 || res.status === 404) {
          setUserError(true);
        }
      }
    } catch (err) {
      apiError = `can't connect to the API : ${err}`;
    }
  };

  const handleSearchCity = (e) => {
    setCity(e.target.value);
  };

  return (
    <div>
      <h1>Weather</h1>
      <Search searchCity={City} handleSearchCity={handleSearchCity} />

      <button
        onClick={() => {
          setUserError(false);
          earlierFetch = true;
          handleFindCity();
        }}
      >
        weather
      </button>
      <p>{apiError}</p>
      {userError && <p>invalid input</p>}

      {findCity.name !== undefined && (
        <div className="city">
          <Name name={findCity.name} country={findCity.sys.country} />
          <Weather weather={findCity.weather[0].main} />
          <Description description={findCity.weather[0].description} />
          <Mintemp minTemp={findCity.main.temp_min} />
          <Maxtemp maxTemp={findCity.main.temp_max} />
          <Location
            lonLocation={findCity.coord.lon}
            latLocation={findCity.coord.lat}
          />
        </div>
      )}
      {findCity.name === undefined && <div> No city has been searched yet</div>}
    </div>
  );
};

const Search = ({ searchCity, handleSearchCity }) => {
  return <input value={searchCity} onChange={handleSearchCity} />;
};

const Name = ({ name, country }) => {
  return (
    <h2>
      {name}, {country}
    </h2>
  );
};

const Weather = ({ weather }) => {
  return <h3>{weather}</h3>;
};

const Description = ({ description }) => {
  return <p>{description}</p>;
};

const Maxtemp = ({ maxTemp }) => {
  return <p>min temp:{maxTemp}</p>;
};

const Mintemp = ({ minTemp, index }) => {
  return <p>max temp:{minTemp}</p>;
};

const Location = ({ lonLocation, index, latLocation }) => {
  return (
    <p>
      Location : {lonLocation},{latLocation}
    </p>
  );
};

export default Cityinfo;
