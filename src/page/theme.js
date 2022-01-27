import React, { useState, createContext, useContext } from "react";

export const themes = {
  light: {
    foreground: "red",
    background: "pink"
  },
  dark: {
    foreground: "red",
    background: "green"
  }
};

const initialState = {
  theme: themes.light,
  setTheme: () => {}
};

const ThemeContext = createContext(initialState);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(themes.light);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export default useTheme;
