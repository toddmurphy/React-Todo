import React from 'react';
import './Todo.css'

//Todo can be a functional component since it's just displaying data --> not holding state

// handleCompleteTodo = (event) => {

// }



const Todo = (props) => {


    //add 'handleComplete' to click todo as completed


    const { task } = props.todo;
    return (
        <div>
            <p>{task}</p>
        </div>
    )
}

export default Todo;


