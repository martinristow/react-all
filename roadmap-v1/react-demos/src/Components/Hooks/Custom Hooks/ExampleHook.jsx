import React from 'react'
import useFetch from "./useFetch.jsx";

const ExampleHook = () => {

    const data = useFetch('https://jsonplaceholder.typicode.com/todos')

    return (
        <div>
            {data && data.map(todo => (
                <p key={todo.id}>{todo.title}</p>
            ))}

        </div>
    )
}
export default ExampleHook
