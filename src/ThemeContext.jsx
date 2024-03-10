import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children, initialTheme }) => {
    const [darkTheme, setDarkTheme] = useState(initialTheme);

    const toggleTheme = () => {
        setDarkTheme(prevTheme => !prevTheme);
    };

    return (
        <ThemeContext.Provider value={{ darkTheme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
