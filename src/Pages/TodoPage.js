import React, { Component } from 'react'
import { connect } from 'react-redux'
import TodoList from '../Components/TodoList/TodoList'
import TodoAdder from '../Components/TodoAdder/TodoAdder'
import {setTodo} from '../Redux/Todo/TodoActions' 

class TodoPage extends Component {


    componentDidMount = () => {
        setTodo()
    }

    render() {

        var {todo} = this.props

        console.log(todo)

        return (
            <div>
            <h3> To Do List</h3>
            <TodoList todo = {todo}/>
            <TodoAdder/>
        </div>
        )
    }
}

var mapStateToProps = (state) => ({
    todo: state.todo
    });

var actions = {
    setTodo
}


export default connect(mapStateToProps, actions)(TodoPage)