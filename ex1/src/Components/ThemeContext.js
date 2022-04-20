import React from "react";

const defaultState = {
    dark: false,
    toggleDark: () => {},
  }
  
export const ThemeContext = React.createContext(defaultState);
  
export const ThemeProvider = ({children}) => {
    const [dark, setDark] = React.useState(false);

    const toggleDark = (e, dark2) => {
        setDark(!dark2)
    }

    return (
        <ThemeContext.Provider value={{dark, toggleDark}}>
            {children}
        </ThemeContext.Provider>
    )
}