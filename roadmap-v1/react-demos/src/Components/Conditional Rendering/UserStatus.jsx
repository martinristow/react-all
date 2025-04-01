import React from 'react'

const UserStatus = ({loggedIn, isAdmin}) => {

    if(isAdmin && loggedIn){
        return <h2>Welcome Admin!</h2>;
    } else{
        return <h2>Welcome User!</h2>;
    }

}
export default UserStatus
