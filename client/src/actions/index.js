import {
    SIGN_IN, 
    SIGN_OUT, 
    GET_LIST,
    GET_STREAM,
    EDIT_STREAM,
    DELETE_STREAM,
    CREATE_STREAM
} from "./types" 
import streams from "../api/streams";

export const signIn = (userid) =>{
    return {
        type: SIGN_IN,
        payload: userid
    }
};

export const signOut = () =>{
    return {
        type: SIGN_OUT
    }
};

export const createStream = formValues => async (dispatch, getState) =>{
    const {userId} = getState().auth;
    const resp = await streams.post("/streams", {...formValues, userId});
    dispatch({
        type: CREATE_STREAM,
        payload : resp.data
    });
}

export const getStream = id => async dispatch =>{
    const resp = await streams.get(`/streams/${id}`)
    dispatch({
        type: GET_STREAM,
        payload: resp.data
    })
}

export const getStreamList = () => async dispatch =>{
    const resp = await streams.get(`/streams`)
    dispatch({
        type: GET_LIST,
        payload: resp.data
    })
}

export const editStream = (id, formValues)=> async dispatch =>{
    const resp = await streams.put(`/streams/${id}`, formValues)
    dispatch({
        type: EDIT_STREAM,
        payload: resp.data
    })
}

export const deleteStream = id => async dispatch =>{
    const resp = await streams.delete(`/streams/${id}`);
    dispatch({
        type: DELETE_STREAM,
        payload: id
    })
}