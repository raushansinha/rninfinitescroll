import {
    GET_MARVEL_CHARACTERS,
    GET_MARVEL_CHARACTERS_SUCCESS
 } from '../actionTyypes'

 const getMarvelCharacters = (onLoadingCompleted) => ({
     type: GET_MARVEL_CHARACTERS,
     onLoadingCompleted,
 });

 const getMarvelCharactersSuccess = (data) => ({
    type: GET_MARVEL_CHARACTERS_SUCCESS,
    data
});

export {
    getMarvelCharacters,
    getMarvelCharactersSuccess
}
