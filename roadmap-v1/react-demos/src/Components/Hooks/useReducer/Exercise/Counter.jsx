import React, {useReducer, useState} from 'react'
import {counterReducer, initialState} from "./counterReducer.js";


const Counter = () => {

    const [state, dispatch] = useReducer(counterReducer, initialState)
    const [inputValue, setInputValue] = useState(0);

    const handleIncrement = () => dispatch({type: "increment"});
    const handleDecrement = () => dispatch({type: "decrement"});
    const handleIncrementByAmount = () => {
        dispatch({type: "incrementByAmount", payload: inputValue});
        setInputValue(0);
    }
    const handleDecrementByAmount = () => {
        dispatch(({type: "decrementByAmount", payload: inputValue}));
        setInputValue(0);
    }

    return (
        <div>
            <h1>Count: {state.count}</h1>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>

            <div>
                <input type="number" value={inputValue} placeholder="Enter a number "
                       onInput={e => setInputValue(e.currentTarget.value)}/>
                <button onClick={handleIncrementByAmount}>Increment by Amount</button>
                <button onClick={handleDecrementByAmount}>Decrement by Amount</button>
            </div>
        </div>
    )
}
export default Counter
