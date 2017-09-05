

import * as Window from '../constants/Window'


export const resizeWindow = (text) =>{
    return (dispatch) => {
        dispatch({
            type: Window.RESIZE_WINDOW,
            payload: text
        })
    }
}

export const createWindow = (text) =>{
    return (dispatch) => {
        dispatch({
            type: Window.CREATE_WINDOW,
            payload: text
        })
    }
}
export const removeWindow = (text) =>{
    return (dispatch) => {
        dispatch({
            type: Window.REMOVE_WINDOW,
            payload: text
        })
    }
}
export const setWidth = (text) =>{
    return (dispatch) => {
        dispatch({
            type: Window.SET_WIDTH,
            payload: text
        })
    }
}
export const setHeight = (text) =>{
    return (dispatch) => {
        dispatch({
            type: Window.SET_HEIGHT,
            payload: text
        })
    }
}