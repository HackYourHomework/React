import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import { useHistory } from "react-router-dom";
const API_KEY = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;

let apiError = "";
const CreateChart = () => {
  const { cityID } = useParams();
  const [cityChart, setCityChart] = useState([]);
  const [cityName, setCityName] = useState({});
  const history = useHistory();
  console.log(cityID);

  useEffect(() => {
    getForecast();
  }, []);

  const goBackHandle = () => {
    history.goBack();
  };

  const getForecast = async () => {
    try {
      const res = await fetch(
        `http://api.openweathermap.org/data/2.5/forecast?id=${cityID}&units=metric&appid=${API_KEY}`
      );
      const data = await res.json();
      setCityName(data);
      setCityChart(data.list);
    } catch (err) {
      apiError = "Unable to connect to the API";
    }
  };

  return (
    <>
      <h1>5 days forecast</h1>
      {cityName.city !== undefined && (
        <h2>
          {cityName.city.name},{cityName.city.country}
        </h2>
      )}

      <h1>{apiError}</h1>
      <div
        style={{
          paddingBottom: "56.25%" /* 16:9 */,
          position: "relative",
          height: 0,
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
          }}
        >
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              width={500}
              height={400}
              data={cityChart}
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
              <Bar
                type="monotone"
                dataKey="main.temp"
                stroke="#8884d8"
                fill="#8884d8"
              />
            </BarChart>
          </ResponsiveContainer>
          <button className="goBackButton" onClick={goBackHandle}>
            go back
          </button>
        </div>
      </div>
    </>
  );
};

export default CreateChart;
