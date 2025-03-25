import React from 'react'
import {useRecoilValue} from "recoil";
import {userState} from "../States/userState.js";
import CreateTasks from "./CreateTasks.jsx";

const Tasks = () => {

    const userData = useRecoilValue(userState);

    return (
        userData.loggedIn && (
            <div>
                <CreateTasks/>
                <p>Tasks</p>
            </div>
        )

    )
}
export default Tasks
