import React, { useState, useEffect } from 'react';
import BookList from './BookList'; // Verifică calea corectă

const Home = () => {
  const [books, setBooks] = useState([]);
  const [filter, setFilter] = useState('All');
  const [title, setTitle] = useState('');
  const [genre, setGenre] = useState('');

  useEffect(() => {
    const storedBooks = JSON.parse(localStorage.getItem('books')) || [];
    setBooks(storedBooks);
  }, []);

  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(books));
  }, [books]);

  const addBook = () => {
    const newBook = {
      id: Date.now(),
      title,
      genre,
      isFavorite: false
    };
    setBooks([...books, newBook]);
    setTitle('');
    setGenre('');
  };

  const deleteBook = (id) => {
    setBooks(books.filter(book => book.id !== id));
  };

  const toggleFavorite = (id) => {
    setBooks(books.map(book => book.id === id ? { ...book, isFavorite: !book.isFavorite } : book));
  };

  const filteredBooks = filter === 'All' ? books : books.filter(book => book.genre === filter);

  return (
    <div>
      <h1>Library</h1>
      <div>
        <input
          type="text"
          placeholder="Book Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Genre"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        />
        <button onClick={addBook}>Add Book</button>
      </div>
      <div>
        <label>Filter by genre:</label>
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="All">All</option>
          <option value="Fiction">Fiction</option>
          <option value="Non-Fiction">Non-Fiction</option>
          {/* Add more genres as needed */}
        </select>
      </div>
      <BookList books={filteredBooks} onDelete={deleteBook} onToggleFavorite={toggleFavorite} />
    </div>
  );
};

export default Home;
