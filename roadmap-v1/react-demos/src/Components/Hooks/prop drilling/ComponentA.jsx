import React from 'react'
import ComponentB from "./ComponentB.jsx";

const ComponentA = ({name}) => {
    return (
        <div>
            <ComponentB name={name}/>
        </div>
    )
}
export default ComponentA
