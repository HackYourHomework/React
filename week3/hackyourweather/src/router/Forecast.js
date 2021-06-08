import React, { useEffect } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import Chart from "../components/Chart";
import { useGlobalContext } from "../components/context";

const Forecast = () => {
  const { notification, cityName, cityForecast, getCityForecast } =
    useGlobalContext();
  const { cityId } = useParams();
  const history = useHistory();

  useEffect(() => {
    getCityForecast(cityId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cityId]);

  return (
    <div className="forecast">
      <h1>Forecast</h1>
      <Link to="/">
        <button className="btn" onClick={() => history.goBack()}>
          Weather
        </button>
      </Link>
      {notification && <h2>{notification}</h2>}
      {cityName && <h2>{cityName}</h2>}
      {cityForecast && <Chart cityForecast={cityForecast} />}
    </div>
  );
};

export default Forecast;
