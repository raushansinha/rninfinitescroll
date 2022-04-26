import {
    compose,
    createStore,
    applyMiddleware
} from 'redux';

import createSagaMiddleware from 'redux-saga';
import rootSaga from '../middleware/rootSaga';
import rootReducer from './reducers/rootReducer';

let composeEnhancers = compose;

//This is to connect react-native debudder tool
if(__DEV__) {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const sagaMiddleware = createSagaMiddleware();

const configureStore = initialState => {
    const store = createStore(
        rootReducer,
        initialState,
        // applyMiddleware(sagaMiddleware),
        composeEnhancers(applyMiddleware(sagaMiddleware))
    );

    sagaMiddleware.run(rootSaga);
    return store;
};


export default configureStore;