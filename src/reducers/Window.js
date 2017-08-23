import * as windowActions from '../constants/Window'

import {initialState, defaultValues} from '../stores/Window'

export default function Window(state = initialState, action) {
    switch (action.type) {
        case windowActions.RESIZE_WINDOW:
            return {
                ...state,
                width  : action.payload
            }
        case windowActions.CREATE_NEW_WINDOW:{
            let newID = state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1;
            return [
                ...state,
                {
                    id : newID,
                    name: "w" + newID,
                    size: {
                        width: defaultValues.size.width,
                        height: defaultValues.size.height
                    }
                }
            ]
        } break;
        default:
            return state
    }
}