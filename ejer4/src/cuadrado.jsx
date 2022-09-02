import React,{useState} from 'react';

const Cuadrado = () => {
    let red = 0;
    let green = 0;
    let blue = 0;

    const [color, setColor] = useState(`rgb(${red},${green},${blue})`);
    const [intervalo,setIntervalo] = useState(0);

    /**
     * Functions that generates a random number that we will use for the rgb colors.
     * @returns a random number between 0 and 255
     */
    function randomNumber () {
        // return Math.floor(Math.random() * (max - min + 1)) + min;
        return Math.floor(Math.random() * 256);
    } 

    /**
     * Function that uses the three primary colors to generate a random color. 
     * @returns a random color and it set it on our color
     */
    const randomColor = () => {
        const rgb ={
            red : randomNumber(),
            green: randomNumber(),
            blue: randomNumber()
        };
        return setColor(`rgb(${rgb.red},${rgb.green},${rgb.blue})`);
    }

    /**
     * Function that changes the random color ever 0.75s
     * @returns 
     */
    function cambioColor () {
        return setIntervalo(setInterval(randomColor,750));
    }
    
    /**
     * Function that stop the interval
     * @returns 
     */
    function pararColor () {
        return clearInterval(intervalo);
    }

    return (
        <div>
            <h2>Resolución sesion 12</h2>

            <div style={{backgroundColor:color, width:'255px', height:'255px', margin:'auto'}}
            onMouseOver={cambioColor}
            onMouseLeave={pararColor}
            onDoubleClick={pararColor}>  
            </div>
        </div>
    );
}

export default Cuadrado;
