import React, { useState, useEffect } from 'react';
import BookList from './BookList'; // Verifică calea corectă

const Favorites = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const storedBooks = JSON.parse(localStorage.getItem('books')) || [];
    setBooks(storedBooks.filter(book => book.isFavorite));
  }, []);

  const deleteBook = (id) => {
    const updatedBooks = books.filter(book => book.id !== id);
    setBooks(updatedBooks);
    const allBooks = JSON.parse(localStorage.getItem('books'));
    const updatedAllBooks = allBooks.filter(book => book.id !== id);
    localStorage.setItem('books', JSON.stringify(updatedAllBooks));
  };

  const toggleFavorite = (id) => {
    const updatedBooks = books.map(book => book.id === id ? { ...book, isFavorite: !book.isFavorite } : book);
    setBooks(updatedBooks);
    const allBooks = JSON.parse(localStorage.getItem('books'));
    const updatedAllBooks = allBooks.map(book => book.id === id ? { ...book, isFavorite: !book.isFavorite } : book);
    localStorage.setItem('books', JSON.stringify(updatedAllBooks));
  };

  return (
    <div>
      <h1>Favorite Books</h1>
      <BookList books={books} onDelete={deleteBook} onToggleFavorite={toggleFavorite} />
    </div>
  );
};

export default Favorites;
