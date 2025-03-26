import React, {useEffect, useState} from 'react'
import {useRecoilValue, useSetRecoilState} from "recoil";
import {userState} from "../States/userState.js";
import CreateTasks from "./CreateTasks.jsx";
import {tasksState} from "../States/tasksState.js";
import {categories} from "../Utils/Categories.js";
import {useForm} from "react-hook-form";
import CommentForm from "./CommentForm.jsx";
import GetAllCommentsForPost from "./GetAllCommentsForPost.jsx";

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
                    taskId: task.id,
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
        setEditTaskId(null);

        const updateTasks = taskData.map(task => {
            if (task.id === data.taskId) {
                return {
                    ...task,
                    name: data.taskName,
                    category: task.category,
                };
            }
            return task;
        });
        setTaskData(updateTasks);
    }

    const newCommentPosted = (data) =>{
        // console.log(data)

        const tasksWithComments = taskData.map(task => {
            if(task.id === parseInt(data.taskId)) {

                let existingComments = [];
                if(Array.isArray(task.comments)) {
                    existingComments = task.comments;
                }
                return {
                  ...task,
                  comments: [...existingComments, data.comments],
                };
            }
            return task;
        })
        setTaskData(tasksWithComments);
    }

    return (

        <>

            {userData.loggedIn && (
                taskData.map((task, index) => {
                    return (
                        <div key={task.id}>

                            {editTaskId === task.id ? (
                                <form onSubmit={handleSubmit(updateTask)}>
                                    <input {...register("taskId")} type="hidden" defaultValue={task.id}/>
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

                                    <CommentForm task={task} callbackPostComment={newCommentPosted}/>

                                    <button onClick={() => deleteTask(index)} key={index}>Delete task</button>

                                </div>
                            )}

                            <GetAllCommentsForPost comments={task.comments}/>

                        </div>
                    )
                })
            )}


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
