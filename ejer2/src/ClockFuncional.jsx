import React, {useState,useEffect} from 'react';
import './relojF.css';

const ClockFuncional = () => {

    const [edad,setEdad] = useState(0);
    const [fecha,setFecha] = useState(new Date());
    const nombre= 'Perla';
    const apellido='Celaya';

    useEffect(() => {
        const interval = setInterval(() => {
          setEdad(edad =>edad + 1);
          setFecha(new Date());
        }, 1000);
        return () => clearInterval(interval);
      },[]);

    return (
        <div className='componente'>
        <h1 className='titulo'>Reloj Funcional</h1>
        <h2 className='hora'>Hora actual: {fecha.toLocaleTimeString()}</h2>
         <h2 className='nombre'>Nombre : {nombre} {apellido}</h2>
         <h2 className='edad'>Edad: {edad}</h2>
         </div>
    );
};


export default ClockFuncional;
