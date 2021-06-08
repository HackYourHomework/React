import { useState } from 'react';

const useFetch = (url) => {
  const [cityList, setCityList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [notFound, setNotFound] = useState(false);

  const fetchWeatherInfo = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(url);
      if (response.ok) {
        const newCity = await response.json();

        setCityList((city) => {
          if (city.some((city) => city.id === newCity.id)) {
            return [...cityList];
          } else {
            return [newCity, ...cityList];
          }
        });
        
        setIsError(false);
        setNotFound(false);
      } else {
        setIsError(false);
        setNotFound(true);
      }

    } catch {
      setNotFound(false);
      setIsError(true);

    } finally {
      setIsLoading(false);
    }
  };

  const fetchForecastInfo = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(url);
      const forecastData = await response.json();
      if (forecastData.status === 404) setNotFound("Not found!");
      setIsError(false)
      return forecastData;
      
    } catch (error) {
      setNotFound(true);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading, isError, notFound, cityList, setCityList,
    setNotFound, fetchForecastInfo, fetchWeatherInfo
  };
};

export default useFetch;