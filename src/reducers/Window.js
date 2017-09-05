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
        case windowActions.REMOVE_WINDOW:{
            return state.filter(item => {return item.id != action.payload});
        } break;
        case windowActions.SET_WIDTH : {
            return state.map(item =>
                item.id === action.payload.id ? { ...item, size:{width: action.payload.width, height: item.size.height} } : item
            );
        } break;
        case windowActions.SET_HEIGHT : {
            return state.map(item =>
                item.id === action.payload.id ? { ...item, size:{width: item.size.width, height: action.payload.height} } : item
            );
            return state;
        } break;
        default:
            return state
    }
}