import React from 'react'

const Greeting = () => {
    const greet = "Hello";
    const name = "John";
    const currentDate = new Date();

    return (
        <div>
            <h1>{greet}</h1>
            <h1>Name: {name}</h1>
            <p>Current hour: {currentDate.getHours()}</p>
        </div>
    )
}
export default Greeting
