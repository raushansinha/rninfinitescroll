import axiosHelper from '../network/axiosHelper';
import md5 from 'md5';
const publicKey = 'a12de281190c3dcb6492ca91806137e8';
const privateKey = '8e6a1412b49d76c8c539756f4a05924ea21d5630';
const ts = 1; //Number(new Date());
const hash = md5(ts + privateKey + publicKey);

const getMarvelCtaracters = async () => {
    try {
        const ts = Number(new Date());
        const hash = md5(ts + privateKey + publicKey);
        const url = `http://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${publicKey}&hash=${hash}`
        // const response = await axiosHelper('http://gateway.marvel.com/v1/public/characters?ts=1&apikey=a12de281190c3dcb6492ca91806137e8&hash=11d8a2884a6395b241e13484638f9872').get();
        const response = await axiosHelper(url).get();
        return response.data.data.results;
      } catch (error) {
        throw error;
      } 
}

export { getMarvelCtaracters };