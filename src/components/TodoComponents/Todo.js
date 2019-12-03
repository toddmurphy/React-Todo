import React from 'react';
import './Todo.css'

//Todo can be a functional component since it's just displaying data --> not holding state



const Todo = (props) => {
    console.log(props)

    const { task, id, completed } = props.todo;
    return (
        <div className={`task${completed ? ' completed' : ''}`}>
            <p onClick={() => props.completeTodo(id)}>{task}</p>
        </div >
    )
}

export default Todo;
