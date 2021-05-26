import './App.css';
import HobbyList from './components/hobby-list/HobbyList';
import Guarantee from './components/guarantee/Guarantee';
import Counter from './components/counter/Counter';

function App() {
  return (
    <div className="App">
      <HobbyList />

      <Guarantee />

      <Counter />
    </div>
  );
}

export default App;
