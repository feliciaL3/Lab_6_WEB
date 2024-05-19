
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import { AppProvider } from './Context';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Booklist from './Components/Booklist/Booklist';
import Bookdetails from './Components/Bookdetails/Bookdetails';
import BookFavorite from './Components/Booklist/BookFavorite'; // Importă noua componentă pentru cărțile favorite

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppProvider>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}>
          <Route path='about' element={<About />} />
          <Route path='book' element={<Booklist />} />
          <Route path='/book/:id' element={<Bookdetails />} />
          <Route path='/favorite' element={<BookFavorite />} /> {/* Adaugă ruta pentru afișarea cărților favorite */}
        </Route>
      </Routes>
    </BrowserRouter>
  </AppProvider>
);
