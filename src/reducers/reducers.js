import {combineReducers} from "redux";
import { SET_FILTER, SET_MOVIES, SET_USER } from '../actions/actions';

function movies(state=[], action){
    switch(action.type){
        case SET_MOVIES: 
        return action.value;
        default: return state;
    }
}

function filter(state="", action){
    switch(action.type){
        case SET_FILTER:
            return action.value;
            default: return state;
    }
}

function user(state={}, action){
    switch(action.type){
        case SET_USER:
            return action.value;
            default: return state;
    }
}



const movieApp = combineReducers({movies, filter, user});
export default movieApp;