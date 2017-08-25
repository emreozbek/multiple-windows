import * as windowActions from '../constants/Window'

import {initialState, defaultValues} from '../stores/Window'

export default function Window(state = initialState, action) {
    switch (action.type) {
        case windowActions.RESIZE_WINDOW:
            return {
                ...state,
                width  : action.payload
            }
        case windowActions.CREATE_WINDOW:{
            let newID = state.reduce((maxId, window) => Math.max(window.id, maxId), -1) + 1;
            return [
                ...state,
                {
                    id : newID,
                    componentID: "window" + newID,
                    size: {
                        width: defaultValues.size.width,
                        height: defaultValues.size.height
                    },
                    url: defaultValues.url
                }
            ]
        } break;
        case windowActions.SET_WIDTH : {
            console.log(state, action);
            return state;
        } break;
        case windowActions.SET_HEIGHT : {
            console.log(state, action);
            return state;
        } break;
        default:
            return state
    }
}