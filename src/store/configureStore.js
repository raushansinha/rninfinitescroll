import {
    compose,
    createStore,
    applyMiddleware
} from 'redux';

import createSagaMiddleware from 'redux-saga';
import rootSaga from '../middleware/rootSaga';
import rootReducer from './reducers/rootReducer';
import {persistStore, persistReducer } from  'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
    key: "root",
    storage: AsyncStorage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer);


let composeEnhancers = compose;

//This is to connect react-native debudder tool
if(__DEV__) {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const sagaMiddleware = createSagaMiddleware();

const configureStore = initialState => {
    // const store = createStore(
    //     rootReducer,
    //     initialState,
    //     composeEnhancers(applyMiddleware(sagaMiddleware))
    // );

    const store = createStore(
        persistedReducer,
        initialState,
        composeEnhancers(applyMiddleware(sagaMiddleware))
    );

    sagaMiddleware.run(rootSaga);
    return {
        store,
        persistor: persistStore(store)
    };
};


export default configureStore;