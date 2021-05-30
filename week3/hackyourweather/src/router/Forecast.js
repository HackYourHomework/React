import React, { useState, useEffect } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import Chart from "../components/Chart";

const Forecast = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [cityForecast, setCityForecast] = useState([]);
  const [cityName, setCityName] = useState("");
  const { cityId } = useParams();
  const history = useHistory();

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const resp = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?id=${cityId}&APPID=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}&units=metric`
        );
        const data = await resp.json();
        if (!resp.ok) {
          throw new Error(data.message);
        }
        setLoading(false);
        setError(false);
        setCityName(data.city.name);
        setCityForecast(data.list);
      } catch (err) {
        setLoading(false);
        setError(err.message);
        setCityForecast();
      }
    })();
  }, [cityId]);
  return (
    <>
      <h1>Forecast</h1>
      <Link to="/">
        <button className="btn" onClick={() => history.goBack()}>
          Weather
        </button>
      </Link>
      {error && <h1>{error}</h1>}
      {loading && <h1>loading ...</h1>}
      {cityName && <h1>{cityName}</h1>}
      {cityForecast && <Chart cityForecast={cityForecast} />}
    </>
  );
};

export default Forecast;
