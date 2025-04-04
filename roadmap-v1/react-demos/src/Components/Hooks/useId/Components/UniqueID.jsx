import {useId} from 'react'


const UniqueId = () => {
    const id = useId();
    console.log(id)
    return (
        <div>
            <label htmlFor={`${id}-email`}>Email</label>
            <input type="text" id={`${id}-email`}/>

            <br/>

            <label htmlFor={`${id}-password`}>Password</label>
            <input type="password" id={`${id}-password`}/>
        </div>
    )
}
export default UniqueId
