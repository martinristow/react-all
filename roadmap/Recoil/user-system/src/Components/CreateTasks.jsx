import React from 'react'
import {useRecoilValue, useSetRecoilState} from "recoil";
import {tasksState} from "../States/tasksState.js";
import {useForm} from "react-hook-form";

const CreateTasks = () => {

    const setTasks = useSetRecoilState(tasksState);

    const tasks = useRecoilValue(tasksState);

    const {
        register,
        handleSubmit,
        setError,
        formState: {errors},
    } = useForm()


    const createTask = (data) => {
        if (data.taskName.trim() === "") {
            setError("error", {
                type: "manuel",
                message: "Task name is required",
            });
            return;
        }

        tasks.forEach(oneTask => {
            if(oneTask === data.taskName){
                setError("error", {
                    type: "manuel",
                    message: "This task name is occupied!",
                });
                return;
            }
        })

        setTasks(oldTasks => [...oldTasks, data.taskName]);

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
