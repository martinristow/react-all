import React, {useState} from 'react'
import {useSetRecoilState} from "recoil";
import {tasksState} from "../States/tasksState.js";

const CreateTasks = () => {

    const [taskName, setTaskName] = useState("")

    const setTasks = useSetRecoilState(tasksState)

    const createTask = () => {
        if (taskName.trim() === "") {
            return;
        }

        setTasks(oldTasks => [...oldTasks, taskName]);
        setTaskName("");
    };

    return (
        <form>
            <input value={taskName} onInput={e => setTaskName(e.currentTarget.value)} type='text'
                   placeholder='Enter title of tasks'/>
            <button type="button" onClick={createTask}>Create task</button>
        </form>
    )
}
export default CreateTasks
