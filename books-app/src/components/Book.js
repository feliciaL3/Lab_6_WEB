import React from 'react';

const Book = ({ book, onDelete, onToggleFavorite }) => (
  <div className="book">
    <h3>{book.title}</h3>
    <p>{book.genre}</p>
    <button onClick={() => onToggleFavorite(book.id)}>{book.isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}</button>
    <button onClick={() => onDelete(book.id)}>Delete</button>
  </div>
);

export default Book;
