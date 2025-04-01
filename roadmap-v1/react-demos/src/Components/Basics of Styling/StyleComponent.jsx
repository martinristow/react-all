import React from 'react'
import { FaCartArrowDown } from "react-icons/fa";

const StyleComponent = () => {

    const styles = {
        color: "white",
        backgroundColor: "teal",
        padding: "2rem"
    };

    return (
        <div>
            <h1 style={styles}>Inline Style</h1>
            <FaCartArrowDown/>
        </div>
    )
}
export default StyleComponent
