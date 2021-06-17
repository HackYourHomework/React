import { useParams, useHistory } from "react-router-dom";
import { useEffect, useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import useFetch from '../hooks/useFetch';

const CityForecast = () => {
  const { cityId } = useParams();
  const url = `https://api.openweathermap.org/data/2.5/forecast?id=${cityId}&units=metric&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}`;
  const { isError, isLoading, notFound, fetchForecastInfo } = useFetch(url);
  const [cityName, setCityName] = useState({});
  const [chartData, setChartdata] = useState([]);
  
  const history = useHistory();

  useEffect(() => {
    const forecast = async () => {
      const data = await fetchForecastInfo();
      if (data) {
        setCityName({ city: data.city.name, countryCode: data.city.country });
        setChartdata(data);
      }
    };
    forecast();
  }, [cityId])

  return (
    <div>
      <h2>5 Day Forecast</h2>
      {isLoading && !isError && <p>Loading...</p>}
      {!isError.show && !isLoading && (
        <h3>{cityName.city} <span>{cityName.countryCode}</span></h3>
      )}
      {notFound && <div>Something went wrong!</div>}
      {isError && <p>There is an error</p>}
      {!isError.show && !isLoading && (
        <ResponsiveContainer width={1000} height={400}>
          <AreaChart data={chartData.list} >
            <Area type='monotone' dataKey='main.temp' stroke="#e78257" fill="#e78257" />
            <XAxis dataKey='dt_txt' />
            <YAxis stroke='#393232' />
            <Tooltip />
            <CartesianGrid strokeDasharray="3 3" />
          </AreaChart>
        </ResponsiveContainer>)}
      <button onClick={() => history.goBack()}>Go Back</button>
    </div>
   );
}
 
export default CityForecast;