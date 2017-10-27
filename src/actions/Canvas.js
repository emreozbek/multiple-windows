


import * as Canvas from '../constants/Canvas'

export const setPosition = (text) =>{
    return (dispatch) => {
        dispatch({
            type: Canvas.SET_POSITION,
            payload: text
        })
    }
}
export const resizedWindow = (text) =>{
    return (dispatch) => {
        dispatch({
            type: Canvas.RESIZED_WINDOW,
            payload: text
        })
    }
}
export const setURL = (text) =>{
    return (dispatch) => {
        dispatch({
            type: Canvas.SET_URL,
            payload: text
        })
    }
}
export const focusToElement = (text) =>{
    return (dispatch) => {
        dispatch({
            type: Canvas.FOCUS_TO_ELEMENT,
            payload: text
        })
    }
}
export const setDirection = (text) =>{
    return (dispatch) => {
        dispatch({
            type: Canvas.SET_DIRECTION,
            payload: text
        })
    }
}
export const setScrollRate = (text) =>{
    return (dispatch) => {
        dispatch({
            type: Canvas.SET_SCROLL_RATE,
            payload: text
        })
    }
}
export const setScrollControl = (text) =>{
    return (dispatch) => {
        dispatch({
            type: Canvas.SET_SCROLL_CONTROL,
            payload: text
        })
    }
}