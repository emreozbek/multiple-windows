


import * as Canvas from '../constants/Canvas'

export const setPosition = (text) =>{
    return (dispatch) => {
        dispatch({
            type: Canvas.SET_POSITION,
            payload: text
        })
    }
}