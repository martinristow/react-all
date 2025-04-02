import React, {useState} from 'react'

const Counter = () => {

    const [counter, setCounter] = useState(0);

    const incrementValue = () => setCounter(counter + 1);
    const decrementValue = () => setCounter(counter - 1);

    return (
        <div>
            <h1>{counter}</h1>
            <button onClick={incrementValue}>Increment Value</button>
            <button onClick={decrementValue}>Decrement Value</button>
        </div>
    )
}
export default Counter
