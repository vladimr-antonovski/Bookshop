import "./App.css";
import BOOKS from "./listofbooks.json";
import { useState } from "react";

function App() {
  const [value, setValue] = useState("");

  const [books, setBooks] = useState(
    BOOKS.sort((item1, item2) => item1.author.localeCompare(item2.author))
  );

  const onSearch = (e, value) => {
    e.preventDefault();

    const filteredBooks = value.trim().length
      ? BOOKS.filter((book) =>
          book.author.toLowerCase().includes(value.toLowerCase()) || book.genre.toLowerCase().includes(value.toLowerCase()) || book.title.toLowerCase().includes(value.toLowerCase())
          
        )
      : BOOKS;

    setBooks(
      filteredBooks.sort((item1, item2) =>
        item1.author.localeCompare(item2.author)
      )
    );
  };

  return (
    <div className="App">
      <p className="heading">BOOKS</p>

      <div className="search_container">
        <form
          className="search_inner_container"
          onSubmit={(e) => onSearch(e, value)}
        >
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            type="text"
            placeholder="search for a book"
          />

          <button type="submit">SEARCH</button>
        </form>

        <div className="books_container">
          {books.map((data) => (
            <div className="books" key={data.title}>
              <div>
                <p className="author">{data.author}</p>

                <p className="title">{data.title}</p>

                <p className="genre">{data.genre}</p>

                
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default App;
