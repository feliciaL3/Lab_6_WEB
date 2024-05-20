import React, { useState, useContext, useEffect, createContext } from 'react';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("the lost world");
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [resultTitle, setResultTitle] = useState("");
  const [favoriteBooks, setFavoriteBooks] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  const URL = "http://openlibrary.org/search.json?title=";

  const fetchBooks = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${URL}${searchTerm}`);
      const data = await response.json();
      const { docs } = data;

      if (docs) {
        const newBooks = docs.slice(0, 20).map((bookSingle) => {
          const { key, author_name, cover_i, edition_count, first_publish_year, title } = bookSingle;

          return {
            id: key,
            author: author_name,
            cover_id: cover_i,
            edition_count: edition_count,
            first_publish_year: first_publish_year,
            title: title
          }
        });

        setBooks(newBooks);

        if (newBooks.length > 1) {
          setResultTitle("Your Search Result");
        } else {
          setResultTitle("No Search Result Found!")
        }
      } else {
        setBooks([]);
        setResultTitle("No Search Result Found!");
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const addToFavorites = (book) => {
    const updatedFavoriteBooks = [...favoriteBooks, book];
    setFavoriteBooks(updatedFavoriteBooks);
    localStorage.setItem('favoriteBooks', JSON.stringify(updatedFavoriteBooks));
    setResultTitle("Added to favorites!");
  };

  const removeFromFavorites = (id) => {
    const updatedFavorites = favoriteBooks.filter(book => book.id !== id);
    setFavoriteBooks(updatedFavorites);
    localStorage.setItem('favoriteBooks', JSON.stringify(updatedFavorites));
  };

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  useEffect(() => {
    const storedFavoriteBooks = JSON.parse(localStorage.getItem('favoriteBooks')) || [];
    setFavoriteBooks(storedFavoriteBooks);
  }, []);

  useEffect(() => {
    fetchBooks();
  }, [searchTerm]);

  // Aplicarea clasei dark-mode în funcție de starea darkMode
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  return (
    <AppContext.Provider value={{ searchTerm, setSearchTerm, books, loading, resultTitle, favoriteBooks, addToFavorites, removeFromFavorites, darkMode, toggleDarkMode }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
