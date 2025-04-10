import {createContext, useState} from 'react'
import Card from "./Card.tsx";


export const ThemeContext = createContext();

const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )

}


const Theme = () => {
    return (
        <div>
            <ThemeProvider>
                <Card/>
            </ThemeProvider>
        </div>
    )
}
export default Theme
