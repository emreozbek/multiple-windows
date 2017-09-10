import * as actions from '../constants/Window'

import {initialState, defaultValues} from '../stores/Window'

export default function Window(state = initialState, action) {
    switch (action.type) {
        case actions.CREATE_WINDOW:{
            let newID = state.reduce((maxId, window) => Math.max(window.id, maxId), -1) + 1;
            return [
                ...state,
                {
                    id : newID,
                    size: {
                        width: defaultValues.size.width,
                        height: defaultValues.size.height
                    },
                    url: defaultValues.url
                }
            ]
        } break;
        case actions.REMOVE_WINDOW:{
            return state.filter(item => {return item.id != action.payload});
        } break;
        case actions.SET_SIZE : {
            return state.map(item =>
                item.id === action.payload.id ? { ...item, size:{width: action.payload.width, height: action.payload.height} } : item
            );
        } break;
        case actions.RELOAD_PAGE : {
            return state.map(item =>
                item.id === action.payload.id ? { ...item, reload: action.payload.reload } : item
            );
        } break;
        default:
            return state
    }
}