import React, {useContext} from 'react'
import {AmountContext, CurrencyContext} from "../App.jsx";
import {CURRENCIES} from "../Utils/CurrencyUtils.jsx";

const Paypal = () => {

    const currency = useContext(CurrencyContext)
    const amount = useContext(AmountContext)

    return (
        <div>
            <p>{currency.currency}, {amount.amount} = {calculateAmount(currency, amount)}</p>
        </div>
    )
}


const calculateAmount = (currency, amount) => {
    return (amount.amount * CURRENCIES[currency.currency]).toFixed(2)
}


export default Paypal
