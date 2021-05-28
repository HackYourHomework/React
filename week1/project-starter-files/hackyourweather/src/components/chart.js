import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useHistory } from "react-router-dom";
const MY_KEY = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;

let apiError = "";
const Char = () => {
  const { cityID } = useParams();
  const [cityChart, setCityChart] = useState([]);
  const [cityName, setCityName] = useState({});
  const history = useHistory();

  useEffect(() => {
    handleFindCity();
  }, []);

  const goBackHandle = () => {
    history.goBack();
  };

  const handleFindCity = async () => {
    try {
      const url = `http://api.openweathermap.org/data/2.5/forecast?id=${cityID}&appid=${MY_KEY}`;
      const res = await fetch(url);
      const data = await res.json();
      setCityName(data);
      setCityChart(data.list);
    } catch (err) {
      apiError = "can't connect to the API";
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
      <button onClick={goBackHandle}>go back</button>
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
          {cityChart.length !== 0 && (
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
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
                <Area
                  type="monotone"
                  dataKey="main.temp"
                  stroke="#8884d8"
                  fill="#8884d8"
                />
              </AreaChart>
            </ResponsiveContainer>
          )}
        </div>
      </div>
    </>
  );
};

export default Char;
