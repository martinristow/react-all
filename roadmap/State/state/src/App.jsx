import './App.css'
import {useState} from "react";
import Product from "./Components/Product.jsx";


function clickOnButton() {
    console.log("Works");
}


function App() {


    let [name, setName] = useState("Hello World"); // "use" -> Hook
    let [tax, setTax] = useState(0);


    return (
        <>
            <Product tax={tax}/>

            <button onClick={clickOnButton}>{name}</button>

            <input type="text" onInput={(e) => setName(e.target.value)}/>

            <h1>My name is {name}</h1>

            <input type="number" placeholder="Enter a new tax" onInput={(e) => setTax(e.target.value)}/>
        </>
    )
}

export default App
