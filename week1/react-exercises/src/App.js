import Header from "./components/Header";
import HobbyList from "./components/ex1-HobbyList";
import GuaranteeList from "./components/ex2-GuaranteeList";
import Counter from "./components/ex3-Counter";
import { hobbies, servicesList } from "./data.js";

const App = () => {
  return (
    <>
      <div className="container">
        <Header title={"Extreme Hobbies"} />
        <HobbyList hobbies={hobbies} />
      </div>

      <div className="container">
        <Header title={"Perfect customer service"} />
        <GuaranteeList servicesList={servicesList} />
      </div>

      <div className="container">
        <Header title={"Counter"} />
        <Counter />
      </div>
    </>
  );
};

export default App;
