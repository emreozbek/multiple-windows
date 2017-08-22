import * as windowActions from '../constants/Window'
import initialState from '../stores'

export default function Window(state = initialState, action) {
    switch (action.type) {
        case windowActions.RESIZE_WINDOW:
            return {
                ...state,
                width  : action.payload
            }
        default:
            return state
    }
}