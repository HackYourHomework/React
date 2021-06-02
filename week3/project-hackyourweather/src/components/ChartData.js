import React, { useState, useEffect } from 'react';
import City from './City';
import BackBtn from './BackBtn';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
} from 'recharts';

const ChartData = ({ match }) => {
  const [data, setTest] = useState({
    city: {},
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  async function fetchCity() {
    setLoading(true);
    setError(false);
    try {
      const response = await fetch(
        `http://api.openweathermap.org/data/2.5/forecast?id=${match.params.id}&units=metric&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}`,
      );
      if (!response.ok) {
        throw Error;
      }
      const json = await response.json();
      setLoading(false);
      setTest(json);
    } catch (e) {
      setError(true);
      setLoading(false);
    }
  }
  useEffect(() => {
    fetchCity();
  }, []);

  return (
    <div style={{ marginTop: '200px', marginLeft: '-125px' }}>
      {error && <h3 className="error">Something went wrong</h3>}
      {loading && <h1 className="loading">Loading ...</h1>}

      <div>
        <h3 className="five-days-forecast">5 days forecast</h3>
        <City name={data.city.name} country={data.city.country} />
        <ResponsiveContainer width={700} aspect={3}>
          <AreaChart
            data={data.list}
            margin={{ top: 20, right: 200, left: -30, bottom: 0 }}
          >
            <XAxis dataKey="dt_txt" />
            <YAxis />
            <CartesianGrid strokeDasharray="1" />
            <Tooltip />
            <ReferenceLine x="Page C" stroke="green" label="Min PAGE" />
            <ReferenceLine
              y={4000}
              label="Max"
              stroke="red"
              strokeDasharray="3 3"
            />
            <Area
              type="monotone"
              dataKey="main.temp"
              stroke="#8884d8"
              fill="#8884d8"
            />
          </AreaChart>
        </ResponsiveContainer>
        <BackBtn />
      </div>
    </div>
  );
};

export default ChartData;
