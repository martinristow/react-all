import React from 'react'
import {useRecoilValue, useSetRecoilState} from "recoil";
import {userState} from "../States/userState.js";
import CreateTasks from "./CreateTasks.jsx";
import {tasksState} from "../States/tasksState.js";

const Tasks = () => {

    const userData = useRecoilValue(userState);
    const taskData = useRecoilValue(tasksState);
    const setTaskData = useSetRecoilState(tasksState);

    const deleteTask = (taskIndex) => {
        const filteredTasks = taskData.filter((_, index) => index !== taskIndex);
        setTaskData(filteredTasks);

    }
    return (

        <>
            {
                taskData.map((taskName, index) => {
                    return (
                        <div key={index}>
                            <p>{taskName}</p>
                            <button onClick={() => deleteTask(index)} key={index}>Delete task</button>
                        </div>
                    )
                })
            }

            {userData.loggedIn && (
                <div>
                    <CreateTasks/>
                    <p>Tasks</p>
                </div>
            )}
        </>

    )
}
export default Tasks
