import React from 'react'
import {useRecoilValue, useSetRecoilState} from "recoil";
import {tasksState} from "../States/tasksState.js";
import {useForm} from "react-hook-form";

const CreateTasks = () => {

    const setTasks = useSetRecoilState(tasksState);

    const tasks = useRecoilValue(tasksState);
    // console.log(tasks);
    const {
        register,
        handleSubmit,
        setError,
        formState: {errors},
    } = useForm()


    const createTask = (data) => {

        let taskFound = false;

        tasks.forEach(task => {
            if (task.name === data.taskName) {
                taskFound = true;
                setError("error", {
                    type: "manuel",
                    message: "This task name is occupied"
                });
                return;
            }

        })

        const newTask = {
            id: 1,
            name: data.taskName,
        };

        if (!taskFound) {
            setTasks(oldTasks => [...oldTasks, newTask]);
        }

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
