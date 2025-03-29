'use client'

import React, {useState} from 'react'

const UserLogin = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {
        if (!username || !password) {
            alert("Enter a username and password");
            return;
        }

        const response = await fetch("/api/auth_user", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: username,
                password: password,
            })
        })


        if (response.status !== 200) {
            alert("Something went wrong! Try again");
            return;
        }

        const data = await response.json()
        console.log(data)
        localStorage.setItem("token", data.token)

    }

    return (
        <div>
            <form>
                <input type="text" placeholder="Enter a username" onInput={e => setUsername(e.currentTarget.value)}/>
                <input type="password" placeholder="Enter a password"
                       onInput={e => setPassword(e.currentTarget.value)}/>
                <button type="button" onClick={handleLogin}>Login</button>
            </form>

        </div>
    )
}
export default UserLogin
