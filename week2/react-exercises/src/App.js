import "./App.css";
import Friend from "./New_friend/components/Friend";
import DogGallery from "./Dog_photo/components/DogGallery";
import RandomJoke from "./Random_Joke/components/RandomJoke";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>New friend on demand</div>
        <Friend />
        <div>Dog photo gallery</div>
        <DogGallery />
        <div>Random Joke Generator</div>
        <RandomJoke />
      </header>
    </div>
  );
}

export default App;
