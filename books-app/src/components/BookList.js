import React from 'react';
import Book from './Book';

const BookList = ({ books, onDelete, onToggleFavorite }) => (
  <div className="book-list">
    {books.map(book => (
      <Book key={book.id} book={book} onDelete={onDelete} onToggleFavorite={onToggleFavorite} />
    ))}
  </div>
);

export default BookList;
