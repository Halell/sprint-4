
import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import thunk from 'redux-thunk'


import { boardReducer } from './reducer/board.reducer.js'
import { userReducer } from './reducer/user.reducer.js'
// import { reviewReducer } from './reducer/review.reducer'
// import { systemReducer } from './reducer/system.reducer'

const rootReducer = combineReducers({
    boardModule: boardReducer,
    // userModule: userReducer,
    // systemModule: systemReducer,
    // reviewModule: reviewReducer,
})


// export const store = createStore(rootReducer, applyMiddleware(thunk))
// window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__();
// Lets wire up thunk and also redux-dev-tools:
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
// export const store = createStore(rootReducer, applyMiddleware(thunk))


