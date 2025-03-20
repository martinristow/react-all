import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router";
import Login from "./Pages/Login.jsx";


const App = () => {
    return (
        <BrowserRouter>
          <Routes>
            <Route path="/" />
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>

    )

}
export default App
