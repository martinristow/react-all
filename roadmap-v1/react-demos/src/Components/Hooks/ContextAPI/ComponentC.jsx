import React from 'react'
import {Data, Data1} from "../../../App.jsx";

const ComponentC = () => {


    return (
        <div>
            <Data.Consumer>
                {
                    (name) => {
                        // return <h1>{name}, {age}</h1>
                        return (
                            <Data1.Consumer>
                                {
                                    (age) => {
                                        return <h2>My name is {name} and I'm {age} years old.</h2>
                                    }
                                }
                            </Data1.Consumer>
                        )
                    }
                }
            </Data.Consumer>
        </div>
    )
}
export default ComponentC
