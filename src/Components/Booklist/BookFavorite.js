// FavoriteSection.js
import React from 'react';
import { useGlobalContext } from '../../Context';

const FavoriteSection = () => {
  const { favoriteBooks, removeFromFavorites } = useGlobalContext();

  const handleRemoveFromFavorites = (id) => {
    removeFromFavorites(id);
  };

  return (
    <div>
      <h2>Favorite Books</h2>
      <ul>
        {favoriteBooks.map((book) => (
          <li key={book.id}>
            <div>
              <h3>{book.title}</h3>
              <p>Author: {book.author}</p>
              <p>Edition Count: {book.edition_count}</p>
              <p>First Publish Year: {book.first_publish_year}</p>
              <button onClick={() => handleRemoveFromFavorites(book.id)}>Remove</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FavoriteSection;
