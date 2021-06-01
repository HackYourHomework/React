import CardList from './Card';

const Cityweather = ({ weather}) => {
  return (
    <div>
      {weather.map(city => {
        return (
          <CardList key={city.id}
          city={city.name} 
          country={city.sys.country}
          weatherMain={city.weather[0].main}
          weatherDescription={city.weather[0].description}
          maxTemp={city.main.temp_max}
          minTemp={city.main.temp_min}
          lat={city.coord.lat}
          lon={city.coord.lon}/>
        )
      })}  
    </div>
  )
}

export default Cityweather;
