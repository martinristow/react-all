import React, {useRef} from 'react'

const UseRefExample = () => {

    const inputElement = useRef(null)
    const focusInput = () => {
        inputElement.current.focus();
        inputElement.current.value = "Martin Ristov";
    }

    return (
        <div>
            <input type="text" ref={inputElement} />
            <button onClick={() => focusInput()}>Focus & Write Martin Ristov</button>
        </div>
    )
}
export default UseRefExample
