import './App.css';
import { useState, useRef, useEffect, useContext, createContext } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  useParams,
} from 'react-router-dom';
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from 'recharts';

const CitiesContext = createContext();
function CitiesProvider(props) {
  const [citiesData, setCitiesData] = useState([]);
  return (
    <CitiesContext.Provider value={[citiesData, setCitiesData]}>
      {props.children}
    </CitiesContext.Provider>
  );
}

function City({ cityData }) {
  const [citiesData, setCitiesData] = useContext(CitiesContext);
  function removeItem(item) {
    setCitiesData((oldItems) => {
      return [...oldItems.filter((i) => i !== item)];
    });
  }
  return (
    <div
      style={{
        border: '1px solid black',
        margin: '10px',
        textAlign: 'left',
        paddingLeft: '30px',
      }}
    >
      <button
        onClick={() => removeItem(cityData)}
        style={{ float: 'right', margin: '5px' }}
      >
        x
      </button>
      <h3>
        {cityData.name}, {cityData.sys.country}
      </h3>
      <p>
        <b>{cityData.weather[0].main}</b>
      </p>
      <p style={{ marginBottom: '10px' }}>{cityData.weather[0].description}</p>

      <p>min temp: {(cityData.main.temp_min - 273.15).toFixed(2)}</p>
      <p>max temp: {(cityData.main.temp_max - 273.15).toFixed(2)}</p>
      <p style={{ marginBottom: '10px' }}>
        location: {cityData.coord.lon}, {cityData.coord.lat}
      </p>
      <Link to={`/${cityData.id}`}>
        <p style={{ marginBottom: '10px' }}>
          <b>5 day forecast</b>
        </p>
      </Link>
    </div>
  );
}
function CityList() {
  const [citiesData, setCitiesData] = useContext(CitiesContext);
  if (citiesData.length > 0) {
    return (
      <div
        style={{
          margin: 'auto',
          width: '50%',
        }}
      >
        {citiesData.map((city) => {
          return (
            <div key={city.id}>
              <City cityData={city} />
            </div>
          );
        })}
      </div>
    );
  } else return <div></div>;
}
function SearchCity() {
  const [citiesData, setCitiesData] = useContext(CitiesContext);
  let cityRef = useRef();
  let [err, setErr] = useState('');

  const submitButton = () => {
    getCity(cityRef.current.value);
  };
  function getCity(cityName) {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}`,
    )
      .then((response) => {
        if (response.ok) {
          setErr('');
          return response.json();
        } else throw new Error('This city is not found');
      })
      .then((data) => {
        const newCities = [data, ...citiesData];
        setCitiesData(newCities);
      })
      .catch((error) => {
        setErr(() => error.message);
      });
  }

  return (
    <div>
      <h2>Weather</h2>
      <h3>{err}</h3>
      <input ref={cityRef} type="text" placeholder="Search City" />
      <button onClick={submitButton}>Search</button>
    </div>
  );
}
function CityPage() {
  const { cityId } = useParams();
  const [forecast, setForecast] = useState({});

  useEffect(() => {
    fetch(
      `http://api.openweathermap.org/data/2.5/forecast?id=${cityId}&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}`,
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => {
        setForecast(data);
      });
  }, []);

  let name = '';
  let country = '';
  let forecastData = [];
  if (forecast.list) {
    forecast.list.forEach((el) => {
      const time = el.dt_txt;
      const temp = (el.main.temp - 273.15).toFixed(2);
      const point = { time: time, temp: temp };
      forecastData.push(point);
    });
  }
  if (forecast.city) {
    name = forecast.city.name;
    country = forecast.city.country;
  }

  const renderLineChart = (
    <LineChart
      width={600}
      height={300}
      data={forecastData}
      margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
    >
      <Line type="monotone" dataKey="temp" stroke="#8884d8" />
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <XAxis dataKey="time" />
      <YAxis />
      <Tooltip />
    </LineChart>
  );

  return (
    <div
      style={{
        margin: 'auto',
        width: '50%',
      }}
    >
      <h3>5 day forecast</h3>
      <h1>
        {name}, {country}
      </h1>
      {renderLineChart}
      <Link to="/">
        <button>Go Back</button>
      </Link>
    </div>
  );
}
function Home() {
  return (
    <div>
      <SearchCity />
      <CityList />
    </div>
  );
}
function App() {
  return (
    <CitiesProvider>
      <Router>
        <div className="App">
          <Route path="/" exact component={Home} />
          <Route path="/:cityId" exact component={CityPage} />
        </div>
      </Router>
    </CitiesProvider>
  );
}

export default App;
