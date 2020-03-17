import React from 'react';
import ReactDOM from 'react-dom';
import store from './Store';
import TodoApp from "./components/TodoApp";
import {Provider} from "react-redux";


ReactDOM.render(
    <Provider store={store}>
        <TodoApp/>
    </Provider>, document.getElementById('root'));


