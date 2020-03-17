import {SET_FILTER} from './actionsTypes';
import {FilterType} from "../../constant";

export const filterReducer=(state=FilterType.ALL, action)=>{
    switch(action.type){
        case SET_FILTER:{
            return action.filter;
        }
        default:
            return state;
    }
}