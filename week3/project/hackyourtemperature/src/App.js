import React, { useState } from "react";
import "./App.css";
import MyChart from "./MyChart";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Search from "./Search";

function App() {
  const [weatherData, setWeatherData] = useState([]);
  return (
    <Router>
      <div className="container">
        <Switch>
          <Route
            path="/"
            exact
            component={(routeProps) => {
              return (
                <Search
                  {...routeProps}
                  weatherData={weatherData}
                  setWeatherData={setWeatherData}
                />
              );
            }}
          />
          <Route path="/:cityID" exact component={MyChart} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
