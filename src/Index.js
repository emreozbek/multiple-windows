

import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import ReduxThunk from 'redux-thunk'
import App from './App'
import reducer from './reducers'

const store = createStore(reducer, {}, applyMiddleware(ReduxThunk))
render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
)