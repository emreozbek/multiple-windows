import * as actions from '../constants/Canvas'

import {initialState} from '../stores/Canvas'

export default function Canvas(state = initialState, action) {
    switch (action.type) {
        case actions.SET_POSITION : {
            return {
                ...state,
                xPosition: action.payload.xPosition,
                yPosition: action.payload.yPosition
            };
        } break;
        default:
            return state
    }
}