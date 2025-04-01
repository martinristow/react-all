import React from 'react'

const Lists = () => {

    const numbers = [1, 2, 3, 4, 5];

    const usersInfo = [
        {
            username: 'John',
            email: 'john@yahoo.com',
            location: "Skopje",
        },
        {
            username: 'Mark',
            email: 'mark@gmail.com',
            location: "Sofia",
        },
        {
            username: 'Peter',
            email: 'peter@gmail.com',
            location: "London",
        },
    ];

    return (
        <div>
            {/*<h1>Lists</h1>*/}
            {/*{*/}
            {/*    numbers.map((number, index) => (*/}
            {/*        <p key={index}>{number}</p>*/}
            {/*    ))*/}
            {/*}*/}
            <h1>Iterate over lists filled with objects</h1>
            {
                usersInfo.map(({username, email, location}, index) => (
                    <div key={index}>
                        <p>{username}</p>
                        <p>{email}</p>
                        <p>{location}</p>
                    </div>
                ))
            }
        </div>
    )
}
export default Lists
