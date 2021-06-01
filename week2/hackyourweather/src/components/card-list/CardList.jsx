import CityCard from '../city-card/CityCard';

const CardList = ({ weatherData }) => (
  <div>
    {weatherData.map((city) => (
      <CityCard
        key={city.id}
        city={city.name}
        country={city.sys.country}
        weather={city.weather[0].main}
        description={city.weather[0].description}
        maxTemp={city.main.temp_max}
        minTemp={city.main.temp_min}
        lon={city.coord.lon}
        lat={city.coord.lat}
      />
    ))}
  </div>
);

export default CardList;
