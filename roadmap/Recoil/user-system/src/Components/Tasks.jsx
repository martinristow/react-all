import React, {useEffect, useState} from 'react'
import {useRecoilValue, useSetRecoilState} from "recoil";
import {userState} from "../States/userState.js";
import CreateTasks from "./CreateTasks.jsx";
import {tasksState} from "../States/tasksState.js";
import {categories} from "../Utils/Categories.js";
import {useForm} from "react-hook-form";

const Tasks = () => {

    const userData = useRecoilValue(userState);
    const taskData = useRecoilValue(tasksState);
    const setTaskData = useSetRecoilState(tasksState);
    const [editTaskId, setEditTaskId] = useState(null);

    const {
        register,
        handleSubmit,
        setError,
        formState: {errors},
        reset,
    } = useForm()

    useEffect(() => {
        if (editTaskId !== undefined) {
            const task = taskData.find(t => t.id === editTaskId);

            if (task) {
                reset({
                    taskName: task.name,
                    category: task.category,
                });
            }
        }
    }, [editTaskId, reset, taskData]);

    const deleteTask = (taskIndex) => {
        const filteredTasks = taskData.filter((_, index) => index !== taskIndex);
        setTaskData(filteredTasks);
    }

    const updateTask = (data) => {
        console.log(data);
    }

    return (

        <>
            {
                taskData.map((task, index) => {
                    return (
                        <div key={task.id}>

                            {editTaskId === task.id ? (
                                <form onSubmit={handleSubmit(updateTask)}>
                                    <input {...register("taskName")} type="text" defaultValue={task.name}/>
                                    <select defaultValue={task.category} {...register("category")}>
                                        {
                                            categories.map((category, index) => {
                                                return (
                                                    <option key={index}
                                                            value={category}>{category}</option>
                                                )
                                            })
                                        }
                                    </select>
                                    <button>Update Task</button>
                                </form>

                            ) : (
                                <div>
                                    <p onClick={() => setEditTaskId(task.id)}>{task.name}</p>
                                    <p onClick={() => setEditTaskId(task.id)}>{task.category}</p>
                                    <button onClick={() => deleteTask(index)} key={index}>Delete task</button>

                                </div>
                            )}


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
