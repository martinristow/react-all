'use client'

import React, {useState} from 'react'
import {useAuth} from "@/app/context/authContext";
import {auth} from "@/app/firebase"
import {signInWithEmailAndPassword } from "firebase/auth"

const UserLogin = () => {


    const {loggedIn} = useAuth()

    if(loggedIn){
        window.location.href = "/";
    }

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {
        if (!email || !password) {
            alert("Enter a username and password");
            return;
        }

        signInWithEmailAndPassword(auth, email, password);

    }

    return (
        <div>
            <form>
                <input type="email" placeholder="Enter a email" onInput={e => setEmail(e.currentTarget.value)}/>
                <input type="password" placeholder="Enter a password"
                       onInput={e => setPassword(e.currentTarget.value)}/>
                <button type="button" onClick={handleLogin}>Login</button>
            </form>

        </div>
    )
}
export default UserLogin
