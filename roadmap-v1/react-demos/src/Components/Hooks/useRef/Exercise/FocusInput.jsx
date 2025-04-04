import React, {useRef} from 'react'

const FocusInput = () => {

    const inputElement = useRef(null);
    console.log(inputElement)
    const clickMe = () => {
        inputElement.current.focus();
    }
    return (
        <div>
            <h1>Exercise</h1>
            <input type="text" ref={inputElement} />
            <button onClick={clickMe}>Click me</button>
        </div>
    )
}
export default FocusInput
