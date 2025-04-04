import {useContext} from "react";
import {UserContext} from "./UserContext.jsx";

export const UserProfile = () => {

    const {name} = useContext(UserContext);

    return (
        <div>
            <h1>{name.name}</h1>
        </div>
    )
}