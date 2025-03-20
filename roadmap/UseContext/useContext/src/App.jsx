import {createContext, useEffect, useReducer, useState} from 'react'
import './App.css'
import Payment from "./Components/Payment.jsx";
import {CURRENCIES} from "./Utils/CurrencyUtils.jsx";
import {initialUserState, loadUserState, userReducer} from "./Reducer/User.jsx";

export const CurrencyContext = createContext("USD");
export const AmountContext = createContext(0);

function App() {

    const [userState, dispatch] = useReducer(userReducer, loadUserState())

    const [currency, setCurrency] = useState("USD");
    const [amount, setAmount] = useState(0);

    const updateCurrency = (currency) => {
        setCurrency(currency)
    }

    const updateAmount = (value) => {
        setAmount(value);
    }

    const saveUser = () => {
        if (userState.username === null || userState.username.trim() === "" || userState.money === null || isNaN(userState.money)) {
            return;
        }
        dispatch({type: "SET_USER_CREATED", payload: true})

    }

    useEffect(() => {
        if (userState.isUserCreated) {
            localStorage.setItem("userState", JSON.stringify(userState));
        }
    }, [userState]);

    return (
        <>
            <CurrencyContext.Provider value={{currency, updateCurrency}}>
                <AmountContext.Provider value={{amount, updateAmount}}>
                    <Payment/>
                </AmountContext.Provider>
            </CurrencyContext.Provider>

            <input type="number" placeholder="Enter a Money" onInput={e => updateAmount(e.currentTarget.value)}/>


            {
                !userState.isUserCreated &&
                <form>
                    <input type="text" placeholder="Enter your username"
                           onInput={e => dispatch({type: "SET_USERNAME", payload: e.currentTarget.value})}/>
                    <input type="number" placeholder="Enter your money"
                           onInput={e => dispatch({type: "SET_MONEY", payload: e.currentTarget.value})}/>
                    <button type="button" onClick={saveUser}>Create User</button>
                </form>
            }


            <select onChange={e => updateCurrency(e.currentTarget.value)}>

                {
                    Object.keys(CURRENCIES).map((currency) => (
                        <option key={currency} value={currency}>{currency}</option>
                    ))
                }

            </select>

        </>
    )
}

export default App
