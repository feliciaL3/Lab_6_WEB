// FavoriteSection.js
import React from 'react';
import { useGlobalContext } from '../../Context';
import "./Booklist.css";


const FavoriteSection = () => {
  const { favoriteBooks, removeFromFavorites } = useGlobalContext();

  const handleRemoveFromFavorites = (id) => {
    removeFromFavorites(id);
  };

  return (
    <div>
      <h2>Favorite Books</h2>
      <ul className="favorite-book-list">
        {favoriteBooks.map((book) => (
          <li key={book.id}>
            <div>
              <h3>{book.title}</h3>
              <p>Author: {book.author}</p>
              <button onClick={() => handleRemoveFromFavorites(book.id)}>Remove</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FavoriteSection;
