import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import {decrement, increment} from "../app/features/counter/counterSlice.js";

const Counter = () => {
    // Read the data from the "store"
    const count = useSelector((state) => state.counter.value);

    // Changing the data by sending "actions" to the store.
    const dispatch = useDispatch();

    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
        </div>
    )
}
export default Counter
