import Header from './components/Header';
import Search from './components/Search';
import './App.css';
import Countries from './components/countries';


function App() {
  return (
    <div className="App">
      <Header />
      <Search />
      <Countries />
    </div>
  );
}

export default App;
