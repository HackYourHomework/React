import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const Charts = () => {
  const { cityId } = useParams();
  const [chartData, setChartData] = useState();
  const [cityName, setCityName] = useState("");

  const fetchChart = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?id=${cityId}&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}`
      );
      const data = await response.json();
      setCityName(data.city);
      setupChart({ ...data });
    } catch (err) {
      throw Error(err);
    }
  };
  useEffect(() => {
    fetchChart();
  }, [cityId]);

  function setupChart(item) {
    setChartData(
      item.list.map((item) => {
        return {
          name: item.dt_txt,
          temp: item.main.temp,
        };
      })
    );
  }
  return (
    <>
      <h1>5 Days Forcast For</h1>
      <h1>
        {" "}
        {cityName.name} {cityName.country}
      </h1>
      {chartData && (
        <AreaChart>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="temp"
            stroke="white"
            fill="rgb(238, 187, 70)"
          />
        </AreaChart>
      )}
      <Link to="/">Back</Link>
    </>
  );
};

export default Charts;
