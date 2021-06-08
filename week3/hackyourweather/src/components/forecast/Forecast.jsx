import './Forecast.css';
import React, { useState, useEffect } from 'react';
import { useParams, useHistory, Link } from 'react-router-dom';
import {
  AreaChart,
  Area,
  YAxis,
  XAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';

const Forecast = () => {
  const { cityId } = useParams();
  const history = useHistory();
  const [forecast, setForecast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState({ error: false });

  const handleError = (message) => setIsError({ error: true, message });

  useEffect(() => {
    const url = `https://api.openweathermap.org/data/2.5/forecast?id=${cityId}&units=metric&APPID=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}`;

    (async () => {
      try {
        setIsLoading(true);

        const resp = await fetch(url);
        if (!resp.ok) throw Error;
        const data = await resp.json();

        setForecast(data);

        setIsError({ error: false });
      } catch {
        handleError(`Oops something went wrong!`);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [cityId]);

  const handleClick = () => history.goBack();

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {isError && <p>{isError.message}</p>}
      {forecast.length !== 0 && (
        <>
          <h1 className="forecast_title">5 day forecast</h1>
          <p className="forecast_city">
            {forecast.city.name}, {forecast.city.country}
          </p>
        </>
      )}
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
        <Area type="monotone" dataKey="main.temp" />
      </AreaChart>

      <Link to="/">
        <button className="back_btn" type="button" onClick={handleClick}>
          Go Back
        </button>
      </Link>
    </div>
  );
};

export default Forecast;
