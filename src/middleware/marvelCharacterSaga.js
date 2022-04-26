import {
    takeLatest, call, put
} from 'redux-saga/effects';
import { GET_MARVEL_CHARACTERS } from '../store/actionTypes';
import { getMarvelCtaracters } from '../network/marvelCharacterService';
import { getMarvelCharactersSuccess } from '../store/actions';

function* hanhleGetMarvelCharacters(){
    try {
        const characterData = yield call(getMarvelCtaracters);
        yield put(getMarvelCharactersSuccess(characterData));
    } catch(error) {
        console.log(error);
    }
}

export default function* watchMarvelCharacterActions() {
    yield takeLatest(GET_MARVEL_CHARACTERS, hanhleGetMarvelCharacters);
}