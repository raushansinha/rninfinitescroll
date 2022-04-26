import { all } from 'redux-saga/effects';
import watchMarvelCharacterActions from './marvelCharacterSaga';

export default function* rootSaga() {
    yield all([
        watchMarvelCharacterActions(),
    ])
}