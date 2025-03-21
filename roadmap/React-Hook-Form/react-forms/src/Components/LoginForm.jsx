import React, {useState} from 'react'
import {useForm} from "react-hook-form"
import {EmailValidator} from "../Validators/EmailValidator.jsx";
import {PasswordValidator} from "../Validators/PasswordValidator.jsx";


const LoginForm = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: {errors},
    } = useForm();

    const formSubmitted = (data) => console.log(data)

    return (
        <form onSubmit={handleSubmit(formSubmitted)}>

            <input {...register("email",EmailValidator)}
                   type="text" placeholder="Enter your email"/>

            {errors.email && <span>{errors.email.message}</span>}
            {errors.password && <span>{errors.password.message}</span>}
            <input {...register("password", PasswordValidator)} type="password" placeholder="Enter your password"/>
            <button>Login</button>
        </form>
    )
}
export default LoginForm
