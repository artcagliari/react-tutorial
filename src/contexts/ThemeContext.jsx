import {createContext, useState} from 'react';

// eslint-disable-next-line react-refresh/only-export-components
export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(currentTheme => (currentTheme === 'light' ? 'dark' : 'light'));
    const body = document.body;
    body.className = theme === 'light' ? 'dark' : 'light'
  };
 const value = { theme, toggleTheme };
 return (
    <ThemeContext value={value}>
      {children}
    </ThemeContext>
  );
}
