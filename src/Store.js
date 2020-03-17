import {createStore, combineReducers} from 'redux';
import {reducer as todoReducer} from "./components/todos/";
import {reducer as filerReducer} from "./components/filter/";

const reducer = combineReducers({
    todos:todoReducer,
    filter:filerReducer
});

export default createStore(reducer);