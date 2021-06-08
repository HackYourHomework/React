import React from "react";
import {Link} from "react-router-dom"


 function WeatherDetails({ weatherData, deleteCity}) {

 
  return (
   
      <div>
          {weatherData.map((city, index) => {
              return (
                
                  <div className='container' key={city.id} >
                      <button className="btn-delete" onClick={() => deleteCity(city.id)}>
                          X
                      </button>
                      <Link to={`/${city.id}`}>
                      <h1>
                          {city.name}, {city.country}
                      </h1>

                      <div className="description">
                          <p>Weather: {city.weather}</p>
                          <p>Description: {city.description}</p> 
                      
                      </div>
                      <div>
         <p>
           min temp: <span>{city.minTemp}</span>
         </p>
         <p>
           max temp: <span>{city.maxTemp}</span>
         </p>
       </div>

       <div>
        <p>
          location: <span>{city.lon}, </span>
          <span>{city.lat}</span>
        </p>
      </div>
      </Link>  
                  </div>
                 
              );
          })}
      </div>
   
  );
}

export default WeatherDetails