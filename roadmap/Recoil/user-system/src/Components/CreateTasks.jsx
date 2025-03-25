import React from 'react'
import {useSetRecoilState} from "recoil";
import {tasksState} from "../States/tasksState.js";
import {useForm} from "react-hook-form";

const CreateTasks = () => {

    const setTasks = useSetRecoilState(tasksState)

    const {
        register,
        handleSubmit,
        setError,
        formState: {errors},
    } = useForm()


    const createTask = (task) => {
        if (task.taskName.trim() === "") {
            setError("error", {
                type: "manuel",
                message: "Task name is required",
            })
            return;
        }

        setTasks(oldTasks => [...oldTasks, task.taskName]);

    };

    return (
        <form onSubmit={handleSubmit(createTask)}>
            {errors.error && <p>{errors.error.message}</p>}
            <input {...register("taskName")} type='text'
                   placeholder='Enter title of tasks'/>
            <button>Create task</button>
        </form>
    )
}
export default CreateTasks
