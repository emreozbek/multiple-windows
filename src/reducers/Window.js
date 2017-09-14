import * as actions from '../constants/Window'

import {initialState, defaultValues} from '../stores/Window'

export default function Window(state = initialState, action) {
    switch (action.type) {
        case actions.CREATE_WINDOW:{
            defaultValues.id = state.reduce((maxId, window) => Math.max(window.id, maxId), -1) + 1;
            Object.assign(defaultValues, action.payload);
            defaultValues.name = defaultValues.name.concat(" - " + defaultValues.id);
            return [
                ...state,
                defaultValues
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
        case actions.SET_WINDOW_POSITION : {
            return state.map(item =>
                item.id === action.payload.id ? { ...item, position:{
                    x: action.payload.x,
                    y: action.payload.y > 0 ? action.payload.y : 0
                } } : item
            );
        } break;
        case actions.SET_WINDOW_NAME : {
            return state.map(item =>
                item.id === action.payload.id ? { ...item, name: action.payload.name } : item
            );
        } break;
        default:
            return state
    }
}