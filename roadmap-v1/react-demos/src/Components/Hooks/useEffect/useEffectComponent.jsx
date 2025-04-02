import React, {useState, useEffect} from 'react'

const UseEffectComponent = () => {

    const [value, setValue] = useState(0);
    const [something, setSomething] = useState(0);


    useEffect(() => {
        if(value > 0){
        console.log("Called useEffect")
        document.title = `Increment ${value}`
        }
    }, [value]);


    return (
        <div>
            <h2>{value}</h2>
            <button onClick={() => setValue(value + 1)}>Click Me</button>
            <button onClick={() => setSomething(something + 1)}>Something</button>
        </div>
    )
}
export default UseEffectComponent
