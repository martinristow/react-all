import React, {useReducer, useState} from 'react'
import {userReducer, initialState} from './userReducer'

const User = () => {

    const [state, dispatch] = useReducer(userReducer, initialState)

    return (
        <div>
            <div>
                <h1>User Profile</h1>
                <p>{state.name}</p>
                <p>{state.email}</p>
                <p>{state.password}</p>
            </div>

            <div>
                <h2>Update Profile</h2>
                <input type="text" placeholder="Enter a name" onInput={e => dispatch({type: 'SET_NAME', payload:e.currentTarget.value})}/>
                <input type="email" placeholder="Enter a email" onChange={e => dispatch({type: 'SET_EMAIL', payload:e.currentTarget.value})}/>
                <input type="password" placeholder="Enter a password" onChange={e => dispatch({type: 'SET_PASSWORD', payload:e.currentTarget.value})}/>
            </div>
        </div>
    )
}
export default User
