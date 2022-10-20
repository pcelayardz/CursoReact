import React, { useState, useEffect } from 'react';
import { getRandomJoke } from '../services/axiosService';
import { IconButton } from '@mui/material'

import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import Button from '@mui/material/Button';

const Chistechucknorris = () => {

    const [chiste, setChiste] = useState(null);
    const [contLike, setLike] = useState(0)
    const [contDislike, setDislike] = useState(0)
    /**
     * React ejecuta 2 veces el useeffect. Monta, desmonta y monta el componente para ayudarte a encontrar
     * side-effects inesperados en tu codigo
     */
    useEffect(() => {
        obtainJoke();
    }, []);

    const obtainJoke = () => {
        getRandomJoke()
            .then((response) => {
                if (response.status === 200) {
                    setChiste(response.data.value)
                }
            })
            .catch((error) => {
                alert(`Something went wrong: ${error}`)
            })
    }

    function darLike() {
        setLike(contLike => contLike + 1);
    }

    function darDislike() {
        setDislike(contDislike => contDislike + 1);
    }

    return (
        <div>
            <h1>Random Chuck Norris Joke</h1>
            <h3>{chiste}</h3>
            <IconButton sx={{ color: 'pink'}} onClick={darLike}>
                <ThumbUpIcon></ThumbUpIcon>    
                <p style={{paddingLeft:'10px'}}>{contLike}</p>     
            </IconButton>
            <IconButton sx={{ color: 'purple'}} onClick={darDislike}>
                <ThumbDownIcon></ThumbDownIcon>
                <p style={{paddingLeft:'10px'}}>{contDislike}</p>
            </IconButton>
            <div>
                <p>Dale al boton si quieres otro chiste</p>
                <Button variant="contained" onClick={obtainJoke}>
                    Random Joke
                </Button>
                <br></br>

            </div>
        </div>
    );
}

export default Chistechucknorris;
