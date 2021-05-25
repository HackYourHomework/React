import "./App.css";
import DogGallery from "./dogFotoGallery";
import Friend from "./newFriend";
import RandomJoke from "./jokeGenerator";
function App() {
  return (
    <div className="App">
      <Friend />
      <div>
        <DogGallery />
      </div>
      <div>
        <RandomJoke />
      </div>
    </div>
  );
}

export default App;
