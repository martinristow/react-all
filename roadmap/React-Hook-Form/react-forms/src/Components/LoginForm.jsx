import React, {useState} from 'react'
import {useForm} from "react-hook-form"


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

            <input {...register("email",
                {required: true,
                        pattern: {
                            value: /\S+@\S+\.\S+/,
                            message: "Entered value does not match email format",
                        }})}
                   type="text" placeholder="Enter your email"/>

            {errors.email && <span>{errors.email.message}</span>}
            {errors.password && <span>Enter a valid password</span>}
            <input {...register("password", {required: true})} type="password" placeholder="Enter your password"/>
            <button>Login</button>
        </form>
    )
}
export default LoginForm
