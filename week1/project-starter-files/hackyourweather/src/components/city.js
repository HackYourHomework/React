import React, { useContext } from "react";
import { GlobalContext } from "../context/dataContext";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

const City = ({ singleCity }) => {
  const { deleteCity } = useContext(GlobalContext);

  return (
    <li>
      {singleCity !== undefined && (
        <div>
          <Link to={singleCity !== undefined && `/${singleCity.id}`}>
            <h2>
              {singleCity.name}, {singleCity.country}
            </h2>
            <h3>{singleCity.weather}</h3>
            <p>{singleCity.description}</p>
            <p>min temp:{singleCity.maxTemp}</p>
            <p>max temp:{singleCity.minTemp}</p>
            <p>
              Location : {singleCity.lonLocation},{singleCity.latLocation}
            </p>
          </Link>
          <button onClick={() => deleteCity(singleCity.id)}>x</button>{" "}
        </div>
      )}
    </li>
  );
};

export default City;
