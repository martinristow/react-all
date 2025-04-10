import {useEffect, useState} from 'react'

interface Todo {
    title: string;
}

const FetchTodo = () => {

    const [todo, setTodo] = useState<Todo | null>(null)
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://jsonplaceholder.typicode.com/todos/1');
                if (!response.ok) throw new Error("Network response was not ok!");

                const data = await response.json();
                setTodo(data);

            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false)
            }
        }

        fetchData();
    }, []);

    if(loading) return <h1>Loading...</h1>

    return (
        <div>
            <h1>Todo</h1>
            <h2>{todo?.title}</h2>
        </div>
    )
}
export default FetchTodo
