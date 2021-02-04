import { combineReducers } from "redux";
import TodoReducer from "./Todo/TodoReducer";


var rootReducer = combineReducers({
    todo: TodoReducer
});

export default rootReducer