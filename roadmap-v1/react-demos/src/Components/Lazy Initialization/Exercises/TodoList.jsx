import React, {useState} from 'react'

const TodoList = () => {

    const [todos, setTodos] = useState([]);
    const [taskName, setTaskName] = useState('')

    const addTaskInTODO = () => {
        setTodos([...todos, taskName])
        setTaskName('');
    };


    return (
        <div>
            <h1>Todo List</h1>
            <form>
                <input type="text" placeholder="Name of task" onInput={e => setTaskName(e.currentTarget.value)}/>
                <button type="button" onClick={addTaskInTODO}>Add Todo</button>
            </form>
            <h2>All Todos</h2>
            <ul>
                {
                    todos.map((todo, index) => (
                        <li key={index}>{todo}</li>
                    ))
                }
            </ul>
        </div>
    )
}
export default TodoList
