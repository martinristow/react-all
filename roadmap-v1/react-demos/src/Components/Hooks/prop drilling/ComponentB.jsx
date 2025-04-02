import React from 'react'
import ComponentC from "./ComponentC.jsx";

const ComponentB = ({name}) => {
    return (
        <div>
            <ComponentC name={name}/>
        </div>
    )
}
export default ComponentB
