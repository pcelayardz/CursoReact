import React from 'react';
import { Contact } from '../models/contact.class';
import CambioEstado from './cambioEstado';

//COMPONENTE A

const ContactCom = () => {

    const defaultContact = new Contact('Perla','Celaya','pc@gmail.com',true)
    return (
        <div>
            <CambioEstado contact={defaultContact}></CambioEstado>
        </div>
    );
};


export default ContactCom;
