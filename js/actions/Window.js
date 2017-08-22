

import * as Window from '../constants/Window'


export const resizeWindow = (text) =>{
    return (dispatch) => {
        dispatch({
            type: Window.RESIZE_WINDOW,
            payload: text
        })
    }
}