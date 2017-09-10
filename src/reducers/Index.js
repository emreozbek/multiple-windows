

import { combineReducers } from 'redux'
import windows from './Window'
import canvas from './Canvas'


const rootReducer = combineReducers({
    windowsStore: windows,
    canvasStore: canvas
})
export default rootReducer
