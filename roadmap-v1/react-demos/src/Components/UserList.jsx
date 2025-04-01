import React from 'react'

const UserList = () => {

    const users = [
        {
            id: 1,
            name: "Alice",
            age: 25
        },
        {
            id: 2,
            name: "Berlin",
            age: 30
        },
        {
            id: 3,
            name: "Crimson",
            age: 22
        },
    ]

    return (
        <div>
            {
                users.map(({id, name, age}, index) => (
                    <div key={id}>
                        <p>Name: {name}, age: {age}</p>
                    </div>
                ))
            }
        </div>
    )
}
export default UserList
