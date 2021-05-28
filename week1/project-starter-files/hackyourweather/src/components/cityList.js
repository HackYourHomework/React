import React, { useContext } from "react";
import { GlobalContext } from "../context/dataContext";
import City from "./city";
const CityList = () => {
  const { weather } = useContext(GlobalContext);
  return (
    <>
      <ul className="list">
        {weather.map((singleCity) => {
          return <City key={singleCity.id} singleCity={singleCity} />;
        })}
      </ul>
    </>
  );
};

export default CityList;
