import Header from "./components/Header";
import Cities from "./components/Cities";
import cities from "./project-starter-files/city-weather.json";

const App = () => {
  return (
    <div className="container">
      <Header title={"Weather"} />
      <Cities cities={cities} />
    </div>
  );
};

export default App;
