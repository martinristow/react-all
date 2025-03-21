import React, {createContext, useReducer} from 'react'
import {BrowserRouter, Route, Routes} from "react-router";
import Login from "./Pages/Login.jsx";
import Navigation from "./Partials/Navigation.jsx";
import {getUsersInitialData, userReducer} from "./Reducers/User.jsx";


export const UserContext = createContext();

const App = () => {


    const [userState, userDispatch] = useReducer(userReducer, getUsersInitialData())

    return (
        <BrowserRouter>
            <UserContext.Provider value={{userState, userDispatch}}>
                <Navigation/>
                <Routes>
                    <Route path="/"/>
                    <Route path="/login" element={<Login/>}/>
                </Routes>

            </UserContext.Provider>

        </BrowserRouter>

    )

}
export default App
