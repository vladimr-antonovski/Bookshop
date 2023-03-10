import "./App.css";
import Books from "./listofbooks.json";
import { useState } from "react";






function App() {

  const [value, setValue] = useState('')

  const OnChange = (event) => {
    setValue(event.target.value);
  }

  const onSearch = (searchBook) => {
    console.log("search", searchBook);
  }


return (


  
    <div className="App">
      <p className="heading">Search</p>

<div className="search_container">

  <div className="search_inner_container">
    <input value={value} onChange={OnChange} type="text" placeholder="search for a book"/>
    <button onClick={() => onSearch(value)}>SEARCH</button>
  </div>
<div className="books_container">
{Books.map((data, post) =>
<div className="books" key={post}>

  <div className="each_book">
  <p className="author">{data.author}</p>
  <p className="title">{data.title}</p>
  <p className="genre">{data.genre}</p>

  </div>
</div>
)}
</div>
</div>


    </div>
  );
}

export default App;
