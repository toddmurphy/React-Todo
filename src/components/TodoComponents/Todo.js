import React from 'react';
import './Todo.css'

//Todo can be a functional component since it's just displaying data --> not holding state





const Todo = (props) => {


    //add 'handleComplete' to click todo as completed
    // not sure how to do 'handleComplete'

    const { task, id } = props.todo;
    return (
        <div >
            <p onClick={() => props.completeTodo(id)} style={{ textDecoration: task.completed ? 'line-through' : '' }}>{task}</p>
        </div>
    )
}

export default Todo;
