import axios from 'axios';
// import md5 from 'md5';

// const publicKey = 'a12de281190c3dcb6492ca91806137e8';
// const privateKey = '8e6a1412b49d76c8c539756f4a05924ea21d5630';
// const ts = 1; //Number(new Date());
// const hash = md5(ts + privateKey + publicKey);

const axiosHelper = (url) => axios.create({ baseURL: url });

export default axiosHelper;