const City = ({ city }) => {
  const kelvinToCelsius = (num) => (num - 273.15).toFixed(1);
  const minTemp = kelvinToCelsius(city.main.temp_min);
  const maxTemp = kelvinToCelsius(city.main.temp_max);

  return (
    <div className="city">
      <h2>
        {city.name}, {city.sys.country}
      </h2>
      <h3>{city.weather[0].main}</h3>
      <h4>{city.weather[0].description}</h4>
      <h5>min temp: {minTemp}</h5>
      <h5>max temp: {maxTemp}</h5>
      <h5>
        location: {city.coord.lon}, {city.coord.lat}
      </h5>
    </div>
  );
};

export default City;
