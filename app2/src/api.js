import axios from 'axios';

export default {
getData: ()=>
axios({method: "GET", url: "https://localhost:3000/usuarios"}),
};