import React from 'react';
import Todo from './Todo';

//TodoList can be a functional component since it's just displaying data --> not holding state

const TodoList = (props) => {
    // console.log(props)
    return (
        <div>
            {props.todos.map(todo => (
                < Todo key={todo.id} todo={todo} completeTodo={props.completeTodo} />
            ))}
        </div>
    )
}

export default TodoList;


// completeTodo = (id) => {
//     const completed = this.state.todos.map(todo => {
//       if (id === todo.id) {
//         todo.completed = !todo.completed;
//       }
//       return todo;
//     })
//     this.setState(completed);
//   }