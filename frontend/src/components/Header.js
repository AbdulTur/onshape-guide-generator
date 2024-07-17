import React, { useState, useEffect } from 'react';

function Header() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem('dark-mode');
    if (savedMode === 'enabled') {
      document.documentElement.classList.add('dark');
      setDarkMode(true);
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    document.documentElement.classList.toggle('dark', newMode);
    localStorage.setItem('dark-mode', newMode ? 'enabled' : 'disabled');
  };

  return (
    <header className="bg-green-600 p-4 flex items-center justify-between">
      <div className="flex items-center">
        <img src="/box-onshape-favicon-512-401x.jpeg" alt="Onshape Logo" className="w-16 h-16 mr-4" />
        <h1 className="text-white text-2xl">Onshape Guide Generator</h1>
      </div>
      <button
        onClick={toggleDarkMode}
        className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900"
      >
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </header>
  );
}

export default Header;
