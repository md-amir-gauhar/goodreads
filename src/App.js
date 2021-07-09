import { useState } from "react";

import { bookList } from "./bookList";

import "./styles.css";

export default function App() {
  const [genre, setGenre] = useState(["programming", "business"]);
  const [books, setBooks] = useState([]);

  const clickHandler = (item) => {
    setBooks(bookList[item].items);
    // console.log(item);
    // console.log(bookList.item);
  };
  return (
    <div className="App">
      <header>
        <h1>📚goodreads</h1>
      </header>
      <div className="genre">
        <p>select a genre to get started</p>
        {genre.map((item, idx) => (
          <button
            className="genre-btn"
            key={idx}
            onClick={() => clickHandler(item)}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="book-list">
        {books.map((book) => (
          <p>{book.name}</p>
        ))}
      </div>
    </div>
  );
}
