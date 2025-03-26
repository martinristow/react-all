import React from 'react'
import {useRecoilValue, useSetRecoilState} from "recoil";
import {tasksState} from "../States/tasksState.js";

const GetAllCommentsForPost = ({comments, taskId}) => {

    const taskData = useRecoilValue(tasksState);
    const setTaskData = useSetRecoilState(tasksState);

    const deleteComment = (comment, taskId) => {

        const tasksWithComments = taskData.map(task => {
            if (task.id === parseInt(taskId)) {
                const updatedComments = task.comments.filter(taskComment => taskComment !== comment);

                return {
                    ...task,
                    comments: updatedComments,
                }
            }
            return task;
        });
        setTaskData(tasksWithComments);
    }

    return (
        <>
            {Array.isArray(comments) && comments.map((comment, index) => (
                <div key={index}>
                    <p>{comment}</p>
                    <button onClick={() => deleteComment(comment, taskId)}>Delete Comment</button>
                </div>
            ))}
        </>
    );

}
export default GetAllCommentsForPost
