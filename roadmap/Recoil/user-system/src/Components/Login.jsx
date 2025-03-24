import React from 'react'

const Login = () => {

    const handleLogin = () => {
        console.log('Login');
    }

    return (
        <form>
            <input type="text" placeholder="Enter your email"/>
            <input type="password" placeholder="Enter your password"/>
            <button type="button" onClick={handleLogin}>Login</button>
        </form>
    )
}
export default Login
