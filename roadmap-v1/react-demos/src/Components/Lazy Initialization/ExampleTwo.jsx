import React, {useState} from 'react'

const ExampleTwo = () => {

    const [randomNumber, setRandomNumber] = useState(() => {
        return Math.floor(Math.random() * 100)
    });

    const generateNewRandomNumber = () => {
        const newNumber = Math.floor(Math.random() * 500);
        setRandomNumber(newNumber);
    }


    return (
        <div>
            <h1>Random Number: {randomNumber}</h1>
            <button onClick={generateNewRandomNumber}>Generate Random Number</button>

        </div>
    )
}
export default ExampleTwo
