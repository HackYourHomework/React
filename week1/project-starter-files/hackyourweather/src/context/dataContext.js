import React, { createContext, useReducer } from "react";
import AppReducer from "./appReducer";

const initialState = {
  weather: [],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const deleteCity = (id) => {
    dispatch({
      type: "DELETE_CITY",
      payload: id,
    });
  };

  const addCity = (singleCity) => {
    dispatch({
      type: "ADD_CITY",
      payload: singleCity,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        weather: state.weather,
        deleteCity,
        addCity,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
