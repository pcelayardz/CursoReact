import axios from 'axios';

// Default config for AXIOS
export default axios.create(
    {
        //Genera un usuario aleatorio
        baseURL: 'https://api.chucknorris.io/jokes/random',
        responseType: 'json',
        timeout: 6000 //time out de 6 segundos por si las peticiones fallan no tarden mas de esos segundos
    }
)
