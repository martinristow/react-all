import React from 'react'


const EventHandling = () => {

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log("Click", e.currentTarget);
    }

    const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
        console.log("MouseEnter", e.currentTarget);
    }

    return (
        <div onMouseEnter={handleMouseEnter}>
                <h2>Event Handling Example</h2>
                <button onClick={handleClick}>Click</button>

        </div>
    )
}
export default EventHandling
