import React, { createContext, useState } from "react";

// Create the theme context
export const ThemeContext = createContext();

// Create the theme provider component
export const ThemeProvider = ({ children }) => {
  const [selectedTheme, setSelectedTheme] = useState("light");

  const handleThemeChange = (theme) => {
    setSelectedTheme(theme);
  };

  const getThemeClassName = () => {
    switch (selectedTheme) {
      case "light":
        return "light-theme";
      case "dark":
        return "dark-theme";
      default:
        return "light-theme";
    }
  };

  return (
    <ThemeContext.Provider
      value={{ handleThemeChange, getThemeClassName, selectedTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
