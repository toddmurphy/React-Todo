import React, { Component } from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';



// you will need a place to store your state in this component.
// design `App` to be the parent component of your application.
// this component is going to take care of state, and any change handlers you need to work with your state

//Initial todo data
const todos = [
  {
    id: Date.now(),
    task: 'Study class components',
    completed: false
  },
  {
    id: Date.now(),
    task: 'Go to the gym',
    completed: false
  },
  {
    id: Date.now(),
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


  render() {
    return (
      <div>
        <h1>Welcome to your Todo App!</h1>
        <TodoForm />
        <TodoList todos={this.state.todos} />
      </div>
    );
  }
}

export default App;


