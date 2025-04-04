import {useContext, useState} from "react";
import {UserContext} from "./UserContext.jsx";

export const UpdateUser = () => {

    const {changeName} = useContext(UserContext);
    const [newName, setNewName] = useState("");
    const handleClick = (e) => {

        e.preventDefault();

        if (newName.trim()) {
            changeName(newName);
            setNewName("");
        }

    }

    return (
        <div>
            <form onSubmit={handleClick}>
                <input type="text" value={newName} placeholder="Enter new name"
                       onInput={e => setNewName(e.currentTarget.value)}/>
                <button>Click ME</button>
            </form>

        </div>
    )

}