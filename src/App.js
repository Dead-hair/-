import React, { useState } from 'react';
import About from './components/About';
import Hobbies from './components/Hobbies';
import Interests from './components/Interests';
import Music from './components/Music';
import './App.css';

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const navigateTo = (page) => {
    setCurrentPage(page);
  };
  const [currentPage, setCurrentPage] = useState('about'); // Состояние для текущей страницы

  const renderPage = () => {
    switch (currentPage) {
      case 'about':
        return <About />;
      case 'hobbies':
        return <Hobbies />;
      case 'interests':
        return <Interests />;
      case 'music':
        return <Music />;
      default:
        return <About />; // По умолчанию показываем страницу "О себе"
    }
  };

  return (
    <div className={`App ${theme}`}>
      <button onClick={toggleTheme}>
        Переключить на {theme === 'light' ? 'темную' : 'светлую'} тему
      </button>
      <nav>
        <button onClick={() => navigateTo('about')}>О себе</button>
        <button onClick={() => navigateTo('hobbies')}>Хобби</button>
        <button onClick={() => navigateTo('interests')}>Интересы</button>
        <button onClick={() => navigateTo('music')}>Музыка</button>
      </nav>
      {renderPage()}
    </div>
  );
}

export default App;