import React, {useEffect, useState} from 'react'

const FetchDataEffect = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const data = await response.json();
            setPosts(data);
        }

        fetchData();
    }, []);

    return (
        <div>
            <h1>Fetching Data Effect</h1>
            <ul>
                {
                    posts.map(post => (post.id === 1 &&
                        <div key={post.id}>
                            <li>TITLE: {post.title}</li>
                            <li>BODY: {post.body}</li>
                        </div>
                    ))

                }
            </ul>
        </div>
    )
}
export default FetchDataEffect
