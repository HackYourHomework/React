import Header from "./components/Header";
import Cities from "./components/Cities";

const App = () => {
  return (
    <div className="container">
      <Header title={"Weather"} />
      <Cities />
    </div>
  );
};

export default App;
