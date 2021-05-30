import React from "react";
import {
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const Chart = ({ cityForecast }) => {
  return (
    <AreaChart
      width={800}
      height={300}
      data={cityForecast.map((day) => ({
        dayDate: day.dt_txt,
        dayTemp: day.main.temp,
      }))}
      margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
    >
      <Area type="monotone" fill="#b19cd9" dataKey="dayTemp" stroke="#8884d8" />
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <XAxis dataKey="dayDate" />
      <YAxis />
      <Tooltip />
    </AreaChart>
  );
};

export default Chart;
