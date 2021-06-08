import React, { useState } from "react";
import Weather from "./Weather";
import CityForecast from "./CityForecast";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  const [cities, setCities] = useState([]);
  return (
    <Router>
      <Switch>
        <Route
          path="/"
          exact
          component={(routeProps) => {
            return (
              <Weather {...routeProps} cities={cities} setCities={setCities} />
            );
          }}
        />
        <Route path="/:id" component={CityForecast} />
      </Switch>
    </Router>
  );
};

export default App;
