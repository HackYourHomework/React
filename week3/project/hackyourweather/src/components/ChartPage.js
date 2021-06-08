import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from '../../node_modules/react-router-dom';
import {
  AreaChart,
  Area,
  YAxis,
  XAxis,
  CartesianGrid,
  Tooltip,
} from '../../node_modules/recharts';

const ChartPage = () => {
  const { cityId } = useParams();
  const history = useHistory();
  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorVariable, setError] = useState(false);

  useEffect(() => {
    const getChart = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?id=${cityId}&units=metric&APPID=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}`,
        );
        const data = await response.json();

        setForecast(data);
        setLoading(false);
      } catch (error) {
        setError(`This error ${error} happened.`);
        setLoading(false);
      }
    };
    getChart();
  }, [cityId]);

  function goBackHandle() {
    history.goBack();
  }
  return (
    <div>
      {loading && <div>Loading...</div>}
      {errorVariable && <div>{errorVariable}</div>}
      {forecast.length !== 0 && (
        <div>
          <h1>5 day forecast</h1>
          <p>
            {forecast.city.name}, {forecast.city.country}
          </p>
        </div>
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
        <Area
          type="monotone"
          dataKey="main.temp"
          stroke="#8884d8"
          fill="#8884d8"
        />
      </AreaChart>

      <button type="button" onClick={goBackHandle}>
        Back
      </button>
    </div>
  );
};

export default ChartPage;
