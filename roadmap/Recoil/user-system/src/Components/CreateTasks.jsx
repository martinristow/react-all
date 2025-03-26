import React from 'react'
import {useRecoilValue, useSetRecoilState} from "recoil";
import {tasksState} from "../States/tasksState.js";
import {useForm} from "react-hook-form";
import {categories} from "../Utils/Categories.js";

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
                setError("taskName", {
                    type: "manuel",
                    message: "This task name is occupied"
                });
                return;
            }

        })

        const newTask = {
            id: Date.now(),
            name: data.taskName,
            category: data.category,
        };

        if (!taskFound) {
            setTasks(oldTasks => [...oldTasks, newTask]);
            // console.log(newTask);
        }

    };

    return (
        <form onSubmit={handleSubmit(createTask)}>
            {errors.taskName && <p>{errors.taskName.message}</p>}
            <input {...register("taskName")} type='text'
                   placeholder='Enter title of tasks'/>

            <select {...register("category")}>
                {
                    categories.map((category, index) => {
                        return (
                            <option key={index} value={category}>{category}</option>
                        )
                    })
                }
            </select>

            <button>Create task</button>
        </form>
    )
}
export default CreateTasks
