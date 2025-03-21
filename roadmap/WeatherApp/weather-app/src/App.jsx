import {BrowserRouter, Route, Routes} from "react-router";
import Home from "./Pages/Home.tsx";

const App = () => {

    return (
        <>

            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
