import React from 'react'

const ComponentTwo = ({count, onClick}) => {
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={onClick}>Click</button>
        </div>
    )
}
export default ComponentTwo
