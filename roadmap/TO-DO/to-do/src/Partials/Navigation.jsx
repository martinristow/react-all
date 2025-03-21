import React, {useContext} from 'react'
import {UserContext} from "../App.jsx";

const Navigation = () => {

    const {userState} = useContext(UserContext);

    const logoutUser = (e) => {
        e.preventDefault();
        localStorage.removeItem("userData");
        window.location.reload();
    }

    return (
        <>
            {
                userState.isLoggedIn &&
                <a href="logout" onClick={logoutUser}>Logout</a>
            }

            {
                !userState.isLoggedIn &&
                <a href="login">Login</a>
            }


        </>
    )
}
export default Navigation
