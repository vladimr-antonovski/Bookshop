import './App.css';
import Books from './listofbooks.json';
import { useState } from 'react'

function App() {

  const [inputText, setInputText] = useState("");

  let inputHandler = (e) => {

    let lowercase = e.target.value.toLowerCase();
    setInputText(lowercase)
  }





  return (
    <div className="App d-flex">
      
  <h1 className="heading">Enter a movie</h1>
<div className="d-flex">
  <div>
  <input id="search_bar" onChange={inputHandler} className="search_bar" placeholder="enter a movie..." />
  <label></label>
  </div>

  <div>
    <button className="button">Search a movie</button>
  </div>
 
</div>

<div className='books'>

<div>
  <p className="heading_two">Books</p>
</div>

<div className="books_section">
{Books.map((data, post) =>
<div className="all_books" key={post}>
  <p className="author">{data.author}</p>
  <p className="title">{data.title}</p>
  <p>{data.genre}</p>
</div>
)}
</div>


</div>

      
    </div>
  );
}

export default App;
