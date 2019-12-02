import React from 'react';
import Todo from './Todo';

//TodoList can be a functional component since it's just displaying data --> not holding state

const TodoList = (props) => {
    console.log(props)
    return (
        <div>
            {props.todos.map(todo => (
                < Todo key={todo.id} todo={todo} />
            ))}
        </div>
    )
}

export default TodoList;