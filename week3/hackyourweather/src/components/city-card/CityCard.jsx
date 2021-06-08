import './CityCard.css';

const CityCard = ({
  id,
  city,
  country,
  weather,
  description,
  maxTemp,
  minTemp,
  lon,
  lat,
  removeCity,
}) => (
  <div className="card">
    <div className="remove_wrapper" onClick={() => removeCity(id)}>
      <span>x</span>
    </div>
    <h2>
      {city}, <span>{country}</span>
    </h2>
    <div className="status_wrapper">
      <h3>{weather}</h3>
      <h4>{description}</h4>
    </div>
    <p>
      Max temp: <span>{maxTemp}°C</span>
    </p>
    <p>
      Min temp: <span>{minTemp}°C</span>
    </p>
    <p>
      Location: {lat}, {lon}
    </p>
  </div>
);

export default CityCard;
