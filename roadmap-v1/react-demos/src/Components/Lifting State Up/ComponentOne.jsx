import React from 'react'

const ComponentOne = ({count, onClick}) => {
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={onClick}>Click</button>
        </div>

    )
}
export default ComponentOne
