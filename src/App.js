import logo from './logo.svg';
import './App.css';
import Main from './Main'
console.log(process.env.REACT_APP_PROPUBLICA_API_KEY)

function App() {
  

  return (
    <div className="App">
      <h1>One Stop Politics Shop</h1>
      <Main />
    </div>
  );
}

export default App;
