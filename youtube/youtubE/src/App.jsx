import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Videos from "./Components/Videos.jsx";




const App = () => {
    return (
        <>

        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Home /> }/>
                <Route path="/video/:id" element={ <Videos /> }/>
            </Routes>
        </BrowserRouter>


        </>
    )
}


export default App
