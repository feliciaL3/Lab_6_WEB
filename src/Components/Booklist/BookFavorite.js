// BookFavorite.js (o nouă componentă pentru afișarea cărților favorite)

import React from 'react';
import { useGlobalContext } from '../../Context';

const BookFavorite = () => {
  const { favoriteBooks } = useGlobalContext();

  return (
    <div>
      <h2>Favorite Books</h2>
      <ul>
        {favoriteBooks.map((book, index) => (
          <li key={index}>{book.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default BookFavorite;
