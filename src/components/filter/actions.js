import {SET_FILTER} from './actionsTypes.js';

export const setFilter = filterType => ({
    type: SET_FILTER,
    filter: filterType
});