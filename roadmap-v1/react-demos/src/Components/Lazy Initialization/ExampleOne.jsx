import React, {useState} from 'react'

const ExampleOne = () => {

    const [count, setCount] = useState( () => {
        const initialCount = 30;
        return initialCount;
    } ); // callback function -> will only run when our component first render

    const increment = () => {
        setCount( (prevState) => prevState + 1);
    }

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={increment}>Increment</button>
        </div>
    )
}
export default ExampleOne
