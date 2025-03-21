import React, {useState} from 'react'

const LoginForm = () => {

    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const [email, setEmail] = useState('');

    const checkPassword = (newPassword) => {
        newPassword = newPassword.trim();

        if(newPassword !== "") {
            setPassword(newPassword);
            setPasswordError('');
            console.log(password);
        } else {
            setPasswordError("Enter a valid password");
        }


    }

    return (
        <form action="">

            <input type="text" placeholder="Enter your name"/>
            <h1>{passwordError}</h1>
            <input onInput={e => checkPassword(e.currentTarget.value)} type="password" placeholder="Enter your password" onChange={e => setPassword(e.currentTarget.value)} />
            <button>Login</button>

        </form>
    )
}
export default LoginForm
