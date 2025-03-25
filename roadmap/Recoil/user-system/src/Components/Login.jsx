import React, {useState} from 'react'
import {useRecoilValue, useSetRecoilState} from "recoil";
import {userState} from "../States/userState.js";
import userData from "./userData.jsx";

const Login = () => {

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const setUserState = useSetRecoilState(userState)

    const userData = useRecoilValue(userState)


    const handleLogin = () => {

        if (email !== "admin@admin.com" || password !== "123456") {
            console.log("Nope")
            return;
        }
        setUserState({
            "loggedIn": true,
            "email": email,
        });
        console.log(setUserState)
    }

    const handleLogout = () => {
        setUserState({})
    }

    return (
        <>
            {
                !userData.loggedIn ? (
                        <form>
                            <input type="text" placeholder="Enter your email"
                                   onInput={e => setEmail(e.currentTarget.value)}/>
                            <input type="password" placeholder="Enter your password"
                                   onInput={e => setPassword(e.currentTarget.value)}/>
                            <button type="button" onClick={handleLogin}>Login</button>
                        </form>)
                    :
                    (<button type="button" onClick={handleLogout}>Logout</button>)

            }


        </>
    )
}
export default Login
