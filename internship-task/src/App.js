import './App.css';
import Books from './listofbooks.json';

function App() {

  return (
    <div className="App d-flex">
      
  <h1 className="heading">Enter a movie</h1>
<div className="d-flex">
  <div>
  <input className="search_bar" placeholder="enter a movie..." />
  <label></label>
  </div>

  <div>
    <button className="button">Search a movie</button>
  </div>
 
</div>


      
    </div>
  );
}

export default App;
