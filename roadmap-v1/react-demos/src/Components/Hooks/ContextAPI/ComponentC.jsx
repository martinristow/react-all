import React from 'react'
import {useContext} from "react";
import {Data, Data1} from "../../../App.jsx";

const ComponentC = () => {

    const userName = useContext(Data)
    const userAge = useContext(Data1)

    return (
        <div>
        <h1>My name is {userName} and I'm {userAge} years old.</h1>
        </div>
    )
}
export default ComponentC
