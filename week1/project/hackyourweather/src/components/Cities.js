import React from 'react';
import data from '../city-weather.json';
import { Card } from 'semantic-ui-react';

const Cityweather = () => {
  
  const cityWeatherDetails = data.map(data => {
    return (
      <Card key={data.weather.id}>
        <Card.Content className="content">
          <Card.Header>{data.name}, {data.sys.country}</Card.Header>
          <h4>{data.weather[0].main}</h4>
          <Card.Description>{data.weather[0].description}</Card.Description>
          <p>min temp: {data.main.temp_min}</p>
          <p>max.temp: {data.main.temp_max}</p>
          <p>location: {data.coord.lon}, {data.coord.lat}</p>  
        </Card.Content> 
      </Card>
    )
  })

  return (
    <div>
      <h1>Weather</h1>
      {cityWeatherDetails}
    </div>
  )
}

export default Cityweather;
