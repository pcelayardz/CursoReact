import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../models/contact.class';

//COMPONENTE B

const CambioEstado = ({contact}) => {

    const [estado,setEstado] = useState(contact.conected);

    function changeState(){
        estado ? setEstado(false) : setEstado(true);
    }

    return (
        <div>
            <h3>Nombre: {contact.name}</h3>
            <h3>Apellido: {contact.surname}</h3>
            <h3>Email: {contact.email}</h3>
            <h3>Estado: { estado ? 'Contacto en Linea' : 'Contacto No disponible'}</h3>
            <button onClick={changeState}>Cambiar estado</button>
        </div>
    );
};


CambioEstado.propTypes = {
    contact : PropTypes.instanceOf(Contact)
};


export default CambioEstado;
