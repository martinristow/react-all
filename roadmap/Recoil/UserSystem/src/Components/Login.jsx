import React, {useState} from 'react'
import {useSetRecoilState} from "recoil";
import {userState} from "../States/userState.js";

const Login = () => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const setUserState = useSetRecoilState(userState);
    console.log(setUserState)

    const handleLogin = () => {
        if(email !== "admin@admin.com" || password !== "123456"){
            console.log("Wrong credentials")
            return;
        }
        setUserState({
            loggedIn: true
        });
    }

    return (
        <>
            <input type="text" placeholder="Enter your email" onInput={e => setEmail(e.currentTarget.value)} />
            <input type="password" placeholder="Enter your password" onInput={e => setPassword(e.currentTarget.value)}/>
            <button onClick={handleLogin}>Login</button>
        </>
    )
}
export default Login
