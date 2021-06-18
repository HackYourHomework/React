import { Card } from 'semantic-ui-react';

const CardList = ({
  city, country, weatherMain, weatherDescription, maxTemp, minTemp, lat, lon
}) => {
  return (
    <Card className='card-wrapper'>
      <Card.Content className="content">
        <Card.Header>{city}, {country}</Card.Header>
        <h4>{weatherMain}</h4>
        <Card.Description>{weatherDescription}</Card.Description>
        <p>min temp: {minTemp}</p>
        <p>max temp: {maxTemp}</p>
        <p>location: {lon}, {lat}</p>
      </Card.Content>
    </Card>
  )
};

export default CardList