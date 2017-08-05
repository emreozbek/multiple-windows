import * as windowActions from '../constants/Window'

const initialState = {
    width: 0,
    height: 0
}


export default function Window(state = initialState, action) {
    switch (action.type) {
        case windowActions.RESIZE_WINDOW:
            console.log(state, action, action.text.width);
            return {
                width  : action.text.width
            }
        default:
            return state
    }
}

