import React from 'react'
import Greet from "./Components/Greet.jsx";
import Header from "./Components/Header.jsx";
import Footer from "./Components/Footer.jsx";
import MainContent from "./Components/MainContent.jsx";

const App = () => {
    return (
        <section>
            <div>
                <h1>Hello World</h1>
            </div>
            {/*<Greet/>*/}
            <Header/>
            <MainContent/>
            <Footer/>
        </section>
    )
}
export default App;
