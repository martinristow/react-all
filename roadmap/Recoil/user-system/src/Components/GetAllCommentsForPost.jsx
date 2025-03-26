import React from 'react'

const GetAllCommentsForPost = ({comments}) => {

    const deleteComment = (comment) => {
        console.log(comment)
    }

    return (
        <>
            {
                comments.map((comment, index) => (
                    <div key={index}>
                        <p>{comment}</p>
                        <button onClick={() => deleteComment(comment)}>Delete Comment</button>
                    </div>

                ))
            }
        </>
    );
}
export default GetAllCommentsForPost
