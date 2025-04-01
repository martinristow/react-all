import React from 'react'

const ExpressionsInJsx = () => {

    const myName = "Martin";
    const multiply = (a, b) => a * b;
    const specialClass = "anything-i-want"

    return (
        <div>
            <p>2 + 2 = {2 + 2}</p>
            <h1>{myName}</h1>
            <p>My Friends List: {["Alex", "John", "Peter", "Ana"]}</p>
            <p>2 + 2 = {multiply(2, 2)}</p>
            <p className={specialClass}>Special Class Name</p>
        </div>
    )
}
export default ExpressionsInJsx
