import "./App.css";
import React from "react";
import Main from "./component/Main";
//import City from "./component/City";
//import Search from "./component/Search";
//import { TiWeatherPartlySunny } from "react-icons/ti";
import Charts from "./component/Charts";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link,
  // Redirect,
  // useHistory,
  // useParams,
  // useLocation,
} from "react-router-dom";
//import { FaRegCaretSquareDown } from "react-icons/fa";

const PageNotFound = () => {
  return <h2>This page is not found</h2>;
};

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Main />
        </Route>
        <Route path="/:cityId">
          <Charts />
        </Route>
        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
