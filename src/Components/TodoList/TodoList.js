import React from 'react'
import TodoListItem from '../../Components/TodoListItem/TodoListItem'

const TodoList = (props) => {
    var {todo} = props
    return (
        <div>

            {/* {todo.map((todo) => {
                <TodoListItem key={todo.id} todo={todo}/>
            })} */}
         
        </div>
    )
}

export default TodoList
