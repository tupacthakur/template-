import React, { useEffect, useState } from 'react';
import { Github } from 'lucide-react'; // Assuming you are using lucide-react for icons

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Check localStorage for dark mode preference on page load
  useEffect(() => {
    const savedTheme = localStorage.getItem('darkMode');
    if (savedTheme === 'true') {
      setDarkMode(true);
      document.body.classList.add('dark');
    } else {
      setDarkMode(false);
      document.body.classList.remove('dark');
    }
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.body.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
    } else {
      document.body.classList.remove('dark');
      localStorage.setItem('darkMode', 'false');
    }
  };

  return (
    <header className="sticky top-0 z-40 flex-none mx-auto w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border-b dark:border-b-0">
      <div className="py-3 px-3 mx-auto w-full flex justify-between items-center max-w-6xl md:px-4">
        {/* Website Logo */}
        <a
          href="/"
          className="flex text-2xl font-bold text-gray-900 whitespace-nowrap dark:text-white"
          aria-label="Aarian Thakur- Portfolio website "
        >
          Aarian Thakur
        </a>

        {/* Navbar Links */}
        <nav className="flex space-x-4 items-center">
          {/* Internal Links */}
          
          {/* External Links */}
          <a
            href="https://github.com/tupacthakur"
            className="inline-flex justify-center items-center w-10 h-10 text-center text-gray-500 hover:bg-gray-100 rounded-full transition"
            aria-label="View my projects on Github"
            target="_blank"
            rel="noreferrer"
          >
            <Github />
          </a>

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="ml-4 p-2 text-gray-500 dark:text-white"
            aria-label="Toggle dark mode"
          >
            {darkMode ? '🌙' : '☀️'}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;

