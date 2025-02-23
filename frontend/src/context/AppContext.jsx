import { createContext } from "react";
import { tutors } from "../assets/assets";

export const AppContext = createContext();

const AppContextProvider = (props) =>{

    const currencySymbol = 'c ';

    const value = {
        tutors,
        currencySymbol
    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}
export default AppContextProvider