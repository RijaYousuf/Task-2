
var initialState = [];

var TodoReducer = async (state = initialState, action) => {

    var {type,payload} = action;

    switch (type){
        
        case "Set_Todo":
            return [...payload.todo];

           case "Add_Todo":
               return [...state, payload.todo];
            case "Delete_Todo":
                return {
                    ...state,
                    todo: state.todo.filter((todo) => todo.id !== payload)
                };
            default:
                return state;
    }
};

export default TodoReducer