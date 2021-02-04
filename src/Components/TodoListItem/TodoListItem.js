import React from 'react'
import { connect } from 'react-redux';
import {deleteTodo} from '../../Redux/Todo/TodoActions'

const TaskListItem = (props) => {
    console.log(props.todo)
    return (
        <div>
            <h1>
                {props.todo.title}
               {/* {props.task.isCompleted ? ( <button onClick={() => props.handleTaskRedo(props.task.id)}>REDO</button>)
                :  (<button onClick={() => props.handleTaskComplete(props.task.id)}>DONE</button>)} */}
               <button 
            //    onClick={() => props.deleteTodo(props.todo.id)}
               >DELETE</button>
            </h1>
        </div>
    );
};

var actions = {
    deleteTodo
}

export default connect(null, actions)(TaskListItem)
