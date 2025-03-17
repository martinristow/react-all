import React from 'react'
import Logo from './assets/react.svg'
import Image from '/vite.svg'
import "./App.css"

let backgroundColor = "white"
let currentTime = new Date().getHours();

if(currentTime > 21 || currentTime < 7){
    backgroundColor = "black"
}

const App = () => {
    return (
        <body style={{backgroundColor: backgroundColor}}>
        <div>
            <p>Hello World</p>
            <img src={Logo} alt="Logo"/>
            <img src={Image} alt="Image"/>
        </div>
        </body>
    )
}
export default App
