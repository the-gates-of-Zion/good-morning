import logo from './logo.svg';
import './Appd.css';
import Greeting from './components/Greetings';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Greeting/>
      </header>
    </div>
  );
}

export default App;
