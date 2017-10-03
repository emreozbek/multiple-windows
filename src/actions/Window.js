

import * as Window from '../constants/Window'

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
export const setSize = (text) =>{
    return (dispatch) => {
        dispatch({
            type: Window.SET_SIZE,
            payload: text
        })
    }
}
export const reloadPage = (text) =>{
    return (dispatch) => {
        dispatch({
            type: Window.RELOAD_PAGE,
            payload: text
        })
    }
}
export const reloadAllPages = (text) =>{
    return (dispatch) => {
        dispatch({
            type: Window.RELOAD_ALL_PAGES,
            payload: text
        })
    }
}
export const setWindowPosition = (text) =>{
    return (dispatch) => {
        dispatch({
            type: Window.SET_WINDOW_POSITION,
            payload: text
        })
    }
}
export const setWindowPositionFromArrows = (text) =>{
    return (dispatch) => {
        dispatch({
            type: Window.SET_WINDOW_POSITION_FROM_ARROWS,
            payload: text
        })
    }
}
export const setWindowName = (text) =>{
    return (dispatch) => {
        dispatch({
            type: Window.SET_WINDOW_NAME,
            payload: text
        })
    }
}
export const fullScreen = (text) =>{
    return (dispatch) => {
        dispatch({
            type: Window.FULLSCREEN_WINDOW,
            payload: text
        })
    }
}
export const setURLALLPages = (text) =>{
    return (dispatch) => {
        dispatch({
            type: Window.SET_URL_ALL_WINDOWS,
            payload: text
        })
    }
}
export const setURLMyWindow = (text) =>{
    return (dispatch) => {
        dispatch({
            type: Window.SET_URL_MY_WINDOW,
            payload: text
        })
    }
}
export const setClickedWindow = (text) =>{
    return (dispatch) => {
        dispatch({
            type: Window.SET_CLICKED_WINDOW,
            payload: text
        })
    }
}