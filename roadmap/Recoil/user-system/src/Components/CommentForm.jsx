import React from 'react'
import {useForm} from "react-hook-form";

const CommentForm = ({task, callbackPostComment}) => {

    const {register,
        handleSubmit
    } = useForm();

    const postComment = (data) => {
        callbackPostComment(data);
    }

    return (
        <form onSubmit={handleSubmit(postComment)}>
            <input {...register("comments")} type="text" placeholder="Enter a your comment"/>
            <input {...register("taskId")} type="hidden" defaultValue={task.id}/>
            <button>Post comment</button>
        </form>
    )

}
export default CommentForm
