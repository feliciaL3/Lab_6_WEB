import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../../Context';
import "./Booklist.css";

const Book = (book) => {
  const { addToFavorites } = useGlobalContext();
  const [isAdded, setIsAdded] = useState(false); // Definim isAdded și setIsAdded folosind useState

  const handleAddToFavorites = () => {
    addToFavorites(book);
    setIsAdded(true); // Setăm starea pentru a indica că cartea a fost adăugată la favorite
  };

  return (
    <div className='book-item flex flex-column flex-sb'>
      <div className='book-item-img'>
        <img src={book.cover_img} alt="cover" />
      </div>
      <div className='book-item-info text-center'>
        <Link to={`/book/${book.id}`} {...book}>
          <div className='book-item-info-item title fw-7 fs-18'>
            <span>{book.title}</span>
          </div>
        </Link>

        <div className='book-item-info-item author fs-15'>
          <span className='text-capitalize fw-7'>Author: </span>
          <span>{book.author.join(", ")}</span>
        </div>

        <div className='book-item-info-item edition-count fs-15'>
          <span className='text-capitalize fw-7'>Total Editions: </span>
          <span>{book.edition_count}</span>
        </div>

        <div className='book-item-info-item publish-year fs-15'>
          <span className='text-capitalize fw-7'>First Publish Year: </span>
          <span>{book.first_publish_year}</span>
        </div>
        <button onClick={handleAddToFavorites} disabled={isAdded}>{isAdded ? 'Added to favorite' : 'Add to favorite'}</button>
      </div>
    </div>
  )
}

export default Book;
