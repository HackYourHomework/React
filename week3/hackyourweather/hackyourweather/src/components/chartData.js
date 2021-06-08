  
import React, { useEffect, useState } from "react";
import { useParams} from "react-router-dom";
import {ResponsiveContainer, AreaChart, Area,XAxis, YAxis, CartesianGrid, Tooltip} from "recharts";
import { useHistory } from "react-router-dom";

const KEY = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;

function DataChart (){
  const back = useHistory();
  const { cityId } = useParams();
  const [chart, setChart] = useState([]);
  const [city, setCity] = useState({ });

  const backFunc = () => {
    back.goBack();
  };


  async function getChart (){
    try{
      const url = `https://api.openweathermap.org/data/2.5/forecast?id=${cityId}&appid=${KEY}`;
      const response = await fetch(url);
      const data = await response.json();
      setCity(data);
      console.log(data);
      console.log(chart);
      setChart(data.list)
    }
    catch (err) {
      throw err;
  }
  }

  useEffect (() =>{
    getChart ();
  }, [cityId]);

  return (
<div>
<h1>5 days forecast</h1>
  <div className="chart">
  <ResponsiveContainer width="100%" height={400}>
    <AreaChart data={chart}>
      <defs>
        <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#2451B7" stopOpacity={0.4} />
        <stop offset="75%" stopColor="#2451B7" stopOpacity={0.05} />
        </linearGradient>
      </defs>
      <Area dataKey="main.temp" stroke="#2451B7" fill="url(#color)"/>
      <XAxis dataKey="dt_txt" />
      <YAxis dataKey="main.temp" />
      <Tooltip />
      <CartesianGrid opacity={0.9} vertical={false} />

    </AreaChart>
  </ResponsiveContainer>
  </div>
  <button onClick={backFunc}>Back to Main</button>
  </div>
  )
};
  
export default DataChart;