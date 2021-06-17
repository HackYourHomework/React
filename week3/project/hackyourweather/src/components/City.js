import { Link } from 'react-router-dom';
import { Card, Icon } from 'semantic-ui-react';


const Cityweather = ({ city, deleteCity }) => {
  const { name, sys, weather, main, coord, id } = city;
  return (
    <Card className='card-wrapper'>
      <Card.Content className="content">
        <Link to={`/${id}`}>
          <Card.Header className='card-header'>{name}, {sys.country}</Card.Header>
        </Link>
        <Icon link name='close' className='close-icon' onClick={() => deleteCity(id)} />
        <h4>{weather[0].main}</h4>
        <Card.Description>{weather[0].description}</Card.Description>
        <p>min temp: {main.temp_min}</p>
        <p>max temp: {main.temp_max}</p>
        <p>location: {coord.lon}, {coord.lat}</p>
      </Card.Content>
    </Card>  
  );
}

export default Cityweather;
