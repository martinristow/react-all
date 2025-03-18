import React from 'react'
import AllVideos from "./Components/AllVideos.jsx";
import {BrowserRouter, Route, Routes} from "react-router";
import Home from "./Pages/Home.jsx";
import Video from "./Components/Video.jsx";

// path = http://localhost:5173/
// path "/" => http://localhost:5173/
// path "/about" => http://localhost:5173/about
// /video/:id => id, 1, 5, 7, 10, 12 => wildcard
// /video/12

const App = () => {
    return (
        <>
            {/*<AllVideos/>*/}
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/video/:id" element={<Video/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}
export default App


