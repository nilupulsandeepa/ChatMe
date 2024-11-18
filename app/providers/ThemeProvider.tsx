//---- Imports
import { createContext, useContext, useEffect, useState } from "react";
import { Appearance, useColorScheme } from "react-native";

//---- Provider
const ThemeContext = createContext(false)

export const ThemeProvider = ({ children }) => {

    //Step 1: Get the initial theme
    const [isDarkTheme, setIsDarkTheme] = useState(Appearance.getColorScheme() === 'dark');

    //Step 2: useEffect to add theme listener on mount
    useEffect(() => {
        //Step 3: Listener callback to handle theme change
        const subscription = Appearance.addChangeListener(({ colorScheme }) => {
            //Step 4: Update isDarkTheme state when theme change
            setIsDarkTheme(colorScheme === 'dark');
            console.log("Theme Provider: isDark -> " + (colorScheme === 'dark'));
        })
        
        //Setp 5: Remove the listener when the component unmounts
        return () => subscription.remove();
    }, []) //Empty array ensures this runs only once (on mount/unmount)

    return (
        <ThemeContext.Provider value={isDarkTheme}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContext;