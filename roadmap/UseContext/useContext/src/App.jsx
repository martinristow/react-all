import {createContext, useState} from 'react'

import './App.css'
import Payment from "./Components/Payment.jsx";

export const CurrencyContext = createContext("USD");

function App() {

    const [currency, setCurrency] = useState("USD")

    const updateCurrency = () => {
        setCurrency("EURO")
    }

    return (
        <>
            <CurrencyContext.Provider value={{currency, updateCurrency}}>
                <Payment />

                <button onClick={updateCurrency}>Change Currency</button>
            </CurrencyContext.Provider>


        </>
    )
}

export default App
