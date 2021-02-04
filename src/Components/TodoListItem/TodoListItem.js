import React from 'react'
import { connect } from 'react-redux';

const TaskListItem = (props) => {
    console.log(props.todo)
    return (
        <div>
            <h1>
                {props.todo.title}
               {/* {props.task.isCompleted ? ( <button onClick={() => props.handleTaskRedo(props.task.id)}>REDO</button>)
                :  (<button onClick={() => props.handleTaskComplete(props.task.id)}>DONE</button>)} */}
               <button 
            //    onClick={() => props.Delete_Todo(props.todo.id)}
               >DELETE</button>
            </h1>
        </div>
    );
};

var actions = {
    Delete_Todo
}

export default connect(null, actions)(TaskListItem)
