import React, {useState, useEffect} from "react";
import {AreaChart,Area, YAxis, XAxis, CartesianGrid, Tooltip} from 'recharts';
import {useParams, useHistory} from "react-router-dom"
const { REACT_APP_OPENWEATHERMAP_API_KEY } = process.env;


function Recharts(){
  const {cityId} = useParams()
  const history = useHistory()
  const [forecast, setForecast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() =>{
    async function getCity() {
      try {
        setIsLoading(true);
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?id=${cityId}&units=metric&APPID=${REACT_APP_OPENWEATHERMAP_API_KEY}`
        );
        const data = await response.json();
        setIsLoading(false);
        setIsError(false);
     
        setForecast(data)
     
      } catch {
        setIsError(true);
      } 
    
    }
    getCity()
  }, [cityId])

  function goBackHandle(){
    history.goBack()
  }
  return (
    <section className="forecast">
      {isLoading && <p>Loading...</p>}
      {isError && <p>ERROR</p>}
      {forecast.length !== 0 && <><h1>5 day forecast</h1><p>{forecast.city.name}, {forecast.city.country}</p></>}
        <AreaChart
          width={1000}
          height={400}
          data={forecast.list}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="dt_txt" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="main.temp" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
    
      <button className="btn-back" type="button" onClick={goBackHandle}>Back</button>
    </section>
  )
}

export default Recharts

