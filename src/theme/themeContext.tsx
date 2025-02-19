import React, { createContext, useState, useContext } from "react";
import { ThemeProvider } from "styled-components/native";
import { lightTheme, darkTheme } from "./index";

const ThemeContext = createContext({ toggleTheme: () => {}, isDarkMode: false });

export const ThemeProviderWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function toggleTheme() {
    setIsDarkMode(prev => !prev);
  }

  return (
    <ThemeContext.Provider value={{ toggleTheme, isDarkMode }}>
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
