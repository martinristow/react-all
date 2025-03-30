'use client'

import {auth} from "@/app/firebase";
import {createUserWithEmailAndPassword} from 'firebase/auth'
import {useState} from "react";
import {useAuth} from "@/app/context/authContext";

export default function UserRegister() {

    const {user} = useAuth()
    console.log(user)

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const register = async () => {

        console.log(password, email);
        await createUserWithEmailAndPassword(auth, email, password);

    }

    return <>
        <h1>Register Form</h1>
        <input onInput={e => setEmail(e.currentTarget.value)} type="email" placeholder="Enter your email address"/>
        <input onInput={e => setPassword(e.currentTarget.value)} type="password" placeholder="Enter your password"/>
        <button onClick={register}>Register</button>
    </>
}