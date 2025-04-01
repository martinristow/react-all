import React from 'react'

const User = ({img, name, age, isMarried, hobbies}) => {
    return (
        <section>
            <div>
                <h1>Name: {name}</h1>
                <p>Age: {age}</p>
                <p>Is married: {isMarried}</p>
                <p>Hobbies:</p>
                {hobbies.map((hobbies, index) => (
                    <p key={index}>{hobbies}</p>
                ))}
                <img src={img} alt="Image by me"/>
            </div>
        </section>
    )
}
export default User
