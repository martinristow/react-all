import React, {useContext, useEffect, useReducer, useState} from 'react'
import USERS from '../data/users.json'
import {getUsersInitialData, initialUserData, userReducer} from "../Reducers/User.jsx";
import {UserContext} from "../App.jsx";

const Login = () => {


    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const [loginError, setLoginError] = useState("");

    const {userState, userDispatch} = useContext(UserContext);


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
                userDispatch({type: "SET_USERNAME", payload: username});
                userDispatch({type: "SET_IS_LOGGED_IN", payload: true});
                userDispatch({type: "SET_LOGIN_TIME", payload: new Date().getTime()});
            }
        })

        if (!foundUser) {
            setLoginError("Enter a valid username and password");
        }

    }
    useEffect(() => {
        if (userState.isLoggedIn) {
            localStorage.setItem("userData", JSON.stringify(userState));
        }
    }, [userState]);

    return (
        <>
            {
                !userState.isLoggedIn &&
                <form>
                    <input onInput={e => setUsername(e.currentTarget.value)} type="text" placeholder="Enter your username"/>
                    <input onInput={e => setPassword(e.currentTarget.value)} type="password"
                           placeholder="Enter your password"/>
                    <button onClick={checkCredentials} type="button">Login</button>
                    <p>{loginError}</p>
                </form>
            }

        </>
    )
}
export default Login
