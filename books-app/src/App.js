import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Favorites from './components/Favorites';
import './styles/light.css'; // Importă stilul light ca implicit
import './styles/dark.css'; // Importă stilul dark

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    document.body.className = isDarkMode ? 'dark' : 'light';
  }, [isDarkMode]);

  return (
    <Router>
      <div>
        <button onClick={() => setIsDarkMode(!isDarkMode)}>
          Switch to {isDarkMode ? 'Light' : 'Dark'} Mode
        </button>
        <Switch>
          <Route path="/favorites" component={Favorites} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
