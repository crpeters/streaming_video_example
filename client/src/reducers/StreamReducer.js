import { startAsyncValidation } from "redux-form";
import { 
    GET_STREAM,
    GET_LIST,
    CREATE_STREAM,
    EDIT_STREAM,
    DELETE_STREAM
} from "../actions/types";
import _ from 'lodash';



// the return is based on what the action payload is
export default (state={}, action)=>{
    switch(action.type){
        case GET_STREAM:
        case CREATE_STREAM:
        case EDIT_STREAM:
            return {...state, [action.payload.id]: action.payload};
        case GET_LIST:
            return {...state, ..._.mapKeys(action.payload, 'id')};
        case DELETE_STREAM:
            return _.omit(state, action.payload); 
        default:
            return state;
    }
}