import HobbyList from "./HobbyList";
import Guarantee from "./Guarantee";
import Counter from "./Counter";
import services from "./my-services.js";

function App() {
  const styleObj = {
    color: "red",
    fontWeight: "bold",
  };

  return (
    <>
      <div>
        <h1 style={styleObj}>Exercise 1</h1>
        <HobbyList />
        <h1 style={styleObj}>Exercise 2</h1>
        <Guarantee
          img={services[0].img.default}
          title={services[0].title}
          description={services[0].description}
        />
        <Guarantee
          img={services[1].img.default}
          title={services[1].title}
          description={services[1].description}
        />
        <Guarantee
          img={services[2].img.default}
          title={services[2].title}
          description={services[2].description}
        />
        <h1 style={styleObj}>Exercise 3</h1>
        <Counter />
      </div>
    </>
  );
}

export default App;
