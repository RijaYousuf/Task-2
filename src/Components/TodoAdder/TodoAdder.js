import React, { Component } from 'react'
import { connect } from 'react-redux'
import {v4 as uuid} from 'uuid'
import { addTodo } from "../../Redux/Todo/TodoActions";

class TodoAdder extends Component {
    state ={
        addInput :''
    }

    handleAddInput= (value) =>{
        this.setState({
            addInput: value
        })

    }

    handleSubmit = (e) => {
        e.preventDefault();
        
            var todoObj = {
                title: this.state.addInput,
            }
            this.props.addTodo(todoObj)

    
    }

    render() {
        return (
            <div>
                  <form onSubmit={this.handleSubmit}>
                  <input value={this.state.addInput} onChange={(e)=>{
                   this.handleAddInput(e.target.value)
                }}  type='text' placeholder='Add ToDo'></input>
                <button type="submit">Add</button>
                  </form>
            </div>
        )
    }
}

var actions = {
    addTodo
}

export default connect(null, actions)(TodoAdder)

