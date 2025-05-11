"use client";
import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "@/state/store";
import {decrement, increment, incrementAsync, incrementByAmount} from "@/state/counter/counterSlice";

const Counter = () => {
    const count = useSelector((state: RootState) => state.counter.value);
    const dispatch = useDispatch<AppDispatch>();
    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={() => {
                dispatch(increment())
            }}>Increment
            </button>
            <button onClick={() => {
                dispatch(decrement())
            }}>Decrement
            </button>
            <button onClick={() => dispatch(incrementByAmount(5))}>Increment By Amount</button>

            <button onClick={() => dispatch(incrementAsync(5))}>IncrementAsync</button>
        </div>
    )
}
export default Counter
