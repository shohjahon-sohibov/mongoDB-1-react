import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [books, setBooks] = useState([]);
  const [magazines, setMagazines] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9000/books")
      .then((res) => res.json())
      .then((data) => setBooks(data));

    fetch("http://localhost:9000/magazines")
      .then((res) => res.json())
      .then((data) => setMagazines(data));
  }, []);

  return (
    <section className="wrapper">
      <section>
        <div>
          <h2>book</h2>

          <form action="/postBook" method="POST">
            <input name="name" type="text" placeholder="book name..." />
            <input name="author" type="text" placeholder="book Author..." />
            <button type="submit">Send</button>
          </form>
        </div>

        <div>
          <h2>Magazine</h2>

          <form action="/postMagazine" method="POST">
            <input name="name" type="text" placeholder="magazine title..." />
            <input
              name="MagazineAuthor"
              type="text"
              placeholder="Magazine author..."
            />
            <button type="submit">Send</button>
          </form>
        </div>
      </section>

      <section className="result-wrapper">
        <div>
          <h1>Books</h1>

          <ul className="book-list">
            {books &&
              books.map((e, i) => (
                <li key={i}>
                  <div>
                    <h3>Name: {e.name}</h3>
                    <h3>Author: {e.author}</h3>
                  </div>
                </li>
              ))}
          </ul>
        </div>

        <div>
          <h1>Magazines</h1>

          <ul>
            {magazines &&
              magazines.map((e, i) => (
                <li key={i}>
                  <h3>Title: {e.title}</h3>
                  <h3>Author: {e.MagazineAuthor}</h3>
                </li>
              ))}
          </ul>
        </div>
      </section>
    </section>
  );
}

export default App;
