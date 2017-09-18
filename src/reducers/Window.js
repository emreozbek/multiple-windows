import * as actions from '../constants/Window'

import {initialState, defaultValues} from '../stores/Window'

export default function Window(state = initialState, action) {
    switch (action.type) {
        case actions.CREATE_WINDOW:{
            let newWindow = defaultValues;
            newWindow.id = state.reduce((maxId, window) => Math.max(window.id, maxId), -1) + 1;
            Object.assign(newWindow, action.payload);
            newWindow.name = newWindow.name.concat(" - " + newWindow.id);
            return [
                ...state,
                newWindow
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
        case actions.RELOAD_ALL_PAGES : {
            return state.map(item => ({
                ...item,
                reload : action.payload
            }));
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
        case actions.FULLSCREEN_WINDOW : {
            return state.map(item =>
                item.id === action.payload.id ? {
                    ...item,
                    fullScreen: action.payload.fullScreen,
                    old: (action.payload.fullScreen ? { size : item.size, position: item.position } : defaultValues.old)
                } : item
            );
        } break;
        case actions.SET_URL_ALL_WINDOWS : {
            return state.map(item => ({
                ...item,
                url : action.payload,
                reload: true
            }));
        } break;
        case actions.SET_URL_MY_WINDOW : {
            return state.map(item =>
                item.id === action.payload.id ? {
                    ...item,
                    url: action.payload.url,
                    reload: true
                } : item
            );
        } break;
        default:
            return state
    }
}