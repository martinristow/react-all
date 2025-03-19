import React, {use, useContext} from 'react'
import {CurrencyContext} from "../App.jsx";

const Paypal = () => {

    const currency = useContext(CurrencyContext)
    console.log(currency)
    return (

        <div>Paypal</div>
    )
}
export default Paypal
