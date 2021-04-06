import './App.css';
import Navigation from './components/navigation'
import logo from './assets/logo.svg'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <br />
        <img src={logo} className="App-logo" alt="logo"/>
        <br />
        <Navigation />
      </header>
    </div>
  );
}

export default App;
