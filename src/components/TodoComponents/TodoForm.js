import React, { Component } from 'react';

//Use class component because TodoForm is holding and setting state

class TodoForm extends Component {
    constructor() {
        super();
        this.state = [

        ]
    }

    render() {
        return (
            <div>
                <h2>TodoForm Component</h2>
            </div>
        )
    }

}

export default TodoForm;