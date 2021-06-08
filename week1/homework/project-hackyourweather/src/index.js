import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import App from './App';
import cityWeather from './city-weather.json';

ReactDOM.render(
  <App cityWeather={cityWeather} />,

  document.getElementById('root'),
);
