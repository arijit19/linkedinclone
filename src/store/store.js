import {createStore,combineReducers,applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk';

import PostReducer from './reducers/posts';
import AuthReducer from './reducers/auth';

// const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ :( null || compose);

const composeEnhancers = (process.env.NODE_ENV === 'development' &&
    (window)?.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;
const store = createStore(combineReducers({
    data: PostReducer,
    auth: AuthReducer
}),
    composeEnhancers(applyMiddleware(thunk))
);

export default store;