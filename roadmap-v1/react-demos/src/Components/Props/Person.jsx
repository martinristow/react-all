import React from 'react'

const Person = ({name, age}) => {
    return (
        <div>
            <h1>Person</h1>
            <h2>{name}</h2>
            <p>{age}</p>
        </div>
    )
}
export default Person
