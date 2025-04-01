import React from 'react'
import Greet from "./Components/Greet.jsx";
import Header from "./Components/Header.jsx";
import Footer from "./Components/Footer.jsx";
import MainContent from "./Components/MainContent.jsx";
import WelcomeMessage from "./Components/WelcomeMessage.jsx";
import JSXRules from "./Components/JSXRules.jsx";

const App = () => {
    return (
        <section>
            <div>
                <h1>Hello World</h1>
            </div>
            {/*<Greet/>*/}
            <Header/>
            <MainContent/>
            <WelcomeMessage/>
            <JSXRules/>
            <Footer/>
        </section>
    )
}
export default App;
