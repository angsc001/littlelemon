import { createContext, useContext, useState } from "react";

const DateContext = createContext (undefined);

export const DateProvider = ({ children }) => {
    const [date, setDate] = useState ("light");
    const toggleDate = () => {
        setDate ((date) => (date === "light" ? "dark": "light"));
        console.log(date);
    }
    return (
        <DateContext.Provider value ={{date, toggleDate}}>
            {children}
        </DateContext.Provider>
    )
}

export const useDate = () => useContext(DateContext);
