import { act } from 'react-test-renderer';
import { GET_MARVEL_CHARACTERS_SUCCESS } from '../actionTypes';

const marvelCharacterReducer = (state=[], action) => {
    switch(action.type) {
        case GET_MARVEL_CHARACTERS_SUCCESS:
            return [...state, ...action.data];
        default:
            return state;
    }
}

export default marvelCharacterReducer;