import {ADD_TODO, TOGGLE_TODO, REMOVE_TODO} from "./actionsTypes";

export default (state = [], action) => {
    switch (action.type) {
        case ADD_TODO: {
            return [{
                id: action.id,
                test: action.text,
                completed: action.completed
            },
                ...state
            ]
        }
        case TOGGLE_TODO: {
            return state.map((todoItem) => {
                if (todoItem === action.id) {
                    return {
                        ...todoItem, completed: !todoItem.completed
                    };
                } else {
                    return todoItem;
                }
            })
        }
        case REMOVE_TODO: {
            return state.filter((todoItem) => {
                return todoItem.id !== action.id;
            })
        }
        default: {
            return state;
        }

    }
}