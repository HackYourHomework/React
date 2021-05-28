export default (state, action) => {
  switch (action.type) {
    case "DELETE_CITY":
      return {
        ...state,
        weather: state.weather.filter(
          (singleCity) => singleCity.id !== action.payload
        ),
      };
    case "ADD_CITY":
      return {
        ...state,
        weather: [action.payload, ...state.weather],
      };
    default:
      return state;
  }
};
