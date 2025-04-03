import React from 'react'
import {Data} from "../../../App.jsx";

const ComponentC = () => {


    return (
        <div>
            <Data.Consumer>
                {
                    (asd) => {
                        return <h1>{asd}</h1>
                    }
                }
            </Data.Consumer>
        </div>
    )
}
export default ComponentC
