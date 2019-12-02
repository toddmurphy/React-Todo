import React from 'react';

//Todo can be a functional component since it's just displaying data --> not holding state

const Todo = (props) => {

    const { task } = props.todo;
    return (
        <div>
            <p>{task}</p>
        </div>
    )
}

export default Todo;


