import React from 'react'
import { FaBeer } from "react-icons/fa";

const IconComponent = () => {

    const styles = {
        size: "30px",
        color: "gold",
    }

    return (
        <div>
            <h1>IconComponent</h1>
            <FaBeer style={styles} />
        </div>
    )
}
export default IconComponent
