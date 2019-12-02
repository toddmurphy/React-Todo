import React, { Component } from 'react';

//Use class component because TodoForm is holding and setting state

class TodoForm extends Component {
    constructor() {
        super();
        this.state = {
            newTodo: ''
        }
    }

    //setup 'handleInputChange' --> to update state with each keystroke
    handleInputChange = (event) => {
        this.setState({
            newTodo: event.target.value
        })
        console.log(event.target.value)
    }

    //setup 'handleSubmit'
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addTodo(this.state.newTodo)
        //clear input field back to empty string
        this.setState({
            newTodo: ''
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type='text'
                        name='todo'
                        value={this.state.newTodo}
                        onChange={this.handleInputChange}
                    />
                    <button>Add todo</button>
                </form>
                <button>Clear completed tasks</button>
            </div>
        )
    }

}

export default TodoForm;