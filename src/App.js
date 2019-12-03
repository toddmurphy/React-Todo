import React, { Component } from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';
import Todo from './components/TodoComponents/Todo';



// you will need a place to store your state in this component.
// design `App` to be the parent component of your application.
// this component is going to take care of state, and any change handlers you need to work with your state

//Initial todo data
const todos = [
  {
    id: 1,
    task: 'Study class components',
    completed: false
  },
  {
    id: 2,
    task: 'Go to the gym',
    completed: false
  },
  {
    id: 3,
    task: 'Go see Star Wars',
    completed: false
  }
]



class App extends Component {
  //initial state
  constructor() {
    super();
    this.state = {
      todos: todos
    }
  }

  //Set up function to  add/create 'add a new todo' --> set it with this.setState
  // addNewTodo will be exported as props to --> TodoForm
  addTodo = (task) => {
    //add new todo to the TodoList --> setState has ...todos, and newTodo (use spread operator to clone all todos)

    //newTodo follows the same data structure as our main initial todo ->this is what we're creating
    const newTodo = {
      id: Date.now(),
      task: task,
      completed: false
    }
    this.setState({
      todos: [...this.state.todos, newTodo]
    })
  }

  // set up function to 'complete' a task' --> 
  // have to pass in 'id' and map over it to be able to see which is being completed or not
  completeTodo = (id) => {
    console.log('clicked')
    const completed = this.state.todos.map(todo => {
      if (id === todo.id) {
        todo.completed = !todo.completed;
      }
      return todo;
    })
    this.setState(completed);
  }


  render() {
    return (
      <div>
        <h1>Todd's todos - yippee!</h1>
        <TodoForm addTodo={this.addTodo} />
        <TodoList todos={this.state.todos} completeTodo={this.completeTodo} />
      </div>
    );
  }
}

export default App;


