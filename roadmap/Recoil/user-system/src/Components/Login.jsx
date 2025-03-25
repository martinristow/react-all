import React, {useState} from 'react'
import {useRecoilValue, useSetRecoilState} from "recoil";
import {userState} from "../States/userState.js";
import {useForm} from "react-hook-form";

const Login = () => {

    const setUserState = useSetRecoilState(userState)

    const userData = useRecoilValue(userState)

    const {
        register,
        handleSubmit,
        setError,
        formState: {errors},
    } = useForm()


    const handleLogin = (data) => {

        if (data.email !== "admin@admin.com" || data.password !== "123456") {
            setError("errorData", {
                type: "manuel",
                message: "Wrong credentials",
            })
            return;
        }
        setUserState({
            "loggedIn": true,
            "email": data.email,
        });

    }

    const handleLogout = () => {
        setUserState({})
    }

    return (
        <>
            {
                !userData.loggedIn ? (
                        <form onSubmit={handleSubmit(handleLogin)}>
                            {errors.errorData && <p>{errors.errorData.message}</p>}
                            <input {...register("email")} type="text" placeholder="Enter your email"/>
                            <input {...register("password")} type="password" placeholder="Enter your password"/>
                            <button>Login</button>
                        </form>)
                    :
                    (<button type="button" onClick={handleLogout}>Logout</button>)

            }
            
        </>
    )
}
export default Login
