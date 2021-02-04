

export var setTodo = (todo) => (dispatch) => {
    dispatch({
        type: "Set_Todo",
            payload: {
                todo: todo
            }
    })
    console.log("done")
}

export var addTodo = (todoObj) => (dispatch) => {
    dispatch({
        type: "Add_Todo",
                payload:{
                    todo:{todoObj}
                }
    })
    console.log("done")
}

export var deleteTodo = (todo) => (dispatch) => {
    dispatch({
        type: "Delete_Todo",
        payload: {
            todo: todo
        }
    })
    console.log("done")
}