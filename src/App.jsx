import React, { useState, useEffect } from 'react';
import Header from './Header';
import Skills from './Skills';
import Projects from './Projects';
import WorkAndEducation from './WorkAndEducation';
import './App.css'; // Assuming App.css is where global styles are defined

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Check localStorage for theme on initial load
  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(savedMode);
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('darkMode', 'false');
    }
  }, [darkMode]);

  return (
    <div>
      <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <div className="container mx-auto">
        <Skills />
        <Projects />
        <WorkAndEducation />
      </div>
    </div>
  );
};

export default App;



