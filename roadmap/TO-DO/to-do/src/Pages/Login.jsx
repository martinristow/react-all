import React, {useState} from 'react'
import USERS from '../data/users.json'

const Login = () => {

    const [username, setUsername] = useState(null)
    const [password, setPassword] = useState(null)
    const [loginError, setLoginError] = useState("")

    const checkCredentials = () => {
        if (username == null || password == null || username.trim() === "" || password.trim() === "") {
            setLoginError("You have not entered a username or password!")
            return;
        }

        let foundUser = false;
        USERS.forEach((user, index) => {
            if (user.username === username && user.password === password) {
                foundUser = true;
                setLoginError(null);
            }


        })

        if (!foundUser) {
            setLoginError("Enter a valid username and password");
        }

    }

    return (
        <>
            <form>
                <input onInput={e => setUsername(e.currentTarget.value)} type="text" placeholder="Enter your username"/>
                <input onInput={e => setPassword(e.currentTarget.value)} type="password"
                       placeholder="Enter your password"/>
                <button onClick={checkCredentials} type="button">Login</button>
                <p>{loginError}</p>
            </form>

        </>
    )
}
export default Login
