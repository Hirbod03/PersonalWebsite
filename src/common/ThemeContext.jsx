import React, {createContext, useContext, useEffect, useState} from 'react'

// Create a context for the theme
const ThemeContext = createContext()

// Custom hook to use the ThemeContext
export const useTheme = () => useContext(ThemeContext);

// ThemeProvider component to wrap the app and provide theme state
export const ThemeProvider = ({children}) => {
    // Initialize theme state from localStorage or default to 'light'
    const [theme, setTheme] = useState(
        () => localStorage.getItem('theme') || 'light'
    )

    // Update the document body attribute and localStorage when theme changes
    useEffect(() => {
        document.body.setAttribute('data-theme', theme)
        localStorage.setItem('theme', theme)
    }, [theme])

    // Function to toggle between light and dark themes
    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
    }

    // Provide the theme and toggle function to children
    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}
