import React from 'react'
import Product from "./Components/Product.jsx";

const App = () => {
    return (
        <>
        <Product tax={10}/>
            <br/>
        <Product tax={20}/>
        </>
    )
}
export default App
