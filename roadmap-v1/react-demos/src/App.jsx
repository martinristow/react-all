import React from 'react'
import Greet from "./Components/Greet.jsx";
import Header from "./Components/Header.jsx";
import Footer from "./Components/Footer.jsx";
import MainContent from "./Components/MainContent.jsx";
import WelcomeMessage from "./Components/WelcomeMessage.jsx";
import JSXRules from "./Components/JSXRules.jsx";
import ExpressionsInJSX from "./Components/ExpressionsInJSX.jsx";
import Greeting from "./Components/Greeting.jsx";
import ProductInfo from "./Components/ProductInfo.jsx";
import Lists from "./Components/Lists.jsx";
import UserList from "./Components/UserList.jsx";
import ProductList from "./Components/ProductList.jsx";

const App = () => {
    return (
        <section>
            <div>
                {/*<h1>Hello World</h1>*/}
            </div>
            {/*<Greet/>*/}
            {/*<Header/>*/}
            {/*<MainContent/>*/}
            {/*<WelcomeMessage/>*/}
            {/*<JSXRules/>*/}
            {/*<ExpressionsInJSX/>*/}
            {/*<Greeting/>*/}
            {/*<ProductInfo/>*/}
            {/*<Lists/>*/}
            <UserList/>
            <ProductList/>
            {/*<Footer/>*/}
        </section>
    )
}
export default App;
