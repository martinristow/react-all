import {useState} from 'react'

const State = () => {

    const [count, setCount] = useState(100);

    const [friends, setFriends] = useState(["Alex", "John"])

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);

    const addOneFriend = () => setFriends([...friends, "Martin"])
    const removeFriend = () => setFriends(friends.filter(friend => friend !== "Martin"))

    const updateOnFriend = () => setFriends(friends.map(friend => friend === "Alex" ? "Alex Smith" : friend))
    return (
        <div><h1>{count}</h1>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            {friends.map((friend, index) => (
                <div key={index}>
                    <li>{friend}</li>
                </div>
            ))}


            <button onClick={addOneFriend}>Add New Friend</button>
            <button onClick={removeFriend}>Remove One Friend</button>
            <button onClick={updateOnFriend}>Update One Friend</button>
        </div>

    )
}
export default State
