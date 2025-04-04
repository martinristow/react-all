import React, {useReducer, useState} from 'react'
import {userReducer, initialState} from './userReducer'

const User = () => {

    const [state, dispatch] = useReducer(userReducer, initialState)
    console.log(state)
    return (
        <div>User</div>
    )
}
export default User
