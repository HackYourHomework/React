import React from "react";
import City from "./city";
import CityList from "./cityList";
import AddCity from "./addCity";
import { GlobalProvider } from "../context/dataContext";

const Home = () => {
  return (
    <GlobalProvider>
      <div>
        <AddCity />
        <CityList />
        <City />
      </div>
    </GlobalProvider>
  );
};

export default Home;
