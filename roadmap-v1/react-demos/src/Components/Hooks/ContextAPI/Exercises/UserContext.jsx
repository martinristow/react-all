import {createContext, useState} from "react";

export const UserContext = createContext();

export const UserProvider = ({children}) => {

    const [name, setName] = useState({name: "Martin Ristov"});

    const changeName = (newName) => {
        setName({name: newName})
    }

    return <UserContext.Provider value={{name, changeName}}>
        {children}
    </UserContext.Provider>

}