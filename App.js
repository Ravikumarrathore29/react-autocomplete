import logo from './logo.svg';
import './App.css';
import AutoCompleteText from './AutoCompleteText';
import countryNames  from './countries';


function App() {
  return (
    <div className="App">
      <div className="App-Component">
        <AutoCompleteText items={countryNames} />

        <br/>
        <br/>
        <AutoCompleteText items={['Ravi','Raji','Rabu','Pialal']} />

      </div>
    </div>
  );
}

export default App;
