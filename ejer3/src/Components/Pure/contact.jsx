import React from 'react';
import PropTypes from 'prop-types';

import { Contact } from '../../models/contact.class';

const ContactComponent = ({contact,status,remove}) => {

    function statusConnectedIcon(){
        if(contact.status){
            return(<i onClick={() => status(contact)} className='bi-toggle-off' style={{color: 'grey'}}></i>)
        }else{
            return(<i onClick={() => status(contact)} className='bi-toggle-on' style={{color: 'green'}}></i>)
        }
    }

    return (
        <tr className='fw-normal'>
            <th><span className='ms-2'>{contact.name}</span></th>
            <td className='align-middle '><span>{contact.email}</span></td>
            <td className='align-middle'><span>{contact.number}</span></td>
            <td className='align-middle'>
                {statusConnectedIcon()}
            </td>
            <td>
                <i className='bi-trash task-action' style={{color:'tomato', fontWeight:'bold', fontSize:'20px'}} onClick={() => remove(contact)}></i> 
            </td>
        </tr>
    );
};


ContactComponent.propTypes = {
    contact: PropTypes.instanceOf(Contact).isRequired,
    status: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired
};


export default ContactComponent;
