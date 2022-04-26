import { combineReducers } from "redux";
import marvelCharacterReducer from './marvelCharacterReducer';

const rootReducer = combineReducers({
    marvelCharacters: marvelCharacterReducer,
});

export default rootReducer;