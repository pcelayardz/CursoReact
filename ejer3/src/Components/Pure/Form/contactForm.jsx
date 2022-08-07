import React,{useRef} from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../../models/contact.class';


const ContactForm = ({add}) => {

    const nameRef = useRef('');
    const emailRef = useRef('');
    const numberRef = useRef('');
    const statusRef = useRef(true);

    function addContact(e) {
        e.preventDefault();
        const newContact = new Contact(
            nameRef.current.value,
            emailRef.current.value,
            numberRef.current.value,
            statusRef.current.value
        );
        add(newContact);
    }

    return (
        <div>
            <form onSubmit={addContact} className='d-flex justify-content-center align-items-center mb-4'>
                <div className='form-outline flex-fill'>
                    <input ref={nameRef} id='inputName' type='text' className='form-control form-control-lg' required autoFocus placeholder='Contact Name'/>
                    <input ref={emailRef} id='inputEmail' type='text' className='form-control form-control-lg' required placeholder='Contact email'/>
                    <input ref={numberRef} id='inputNumber' type='text' className='form-control form-control-lg' required placeholder='Contact number'/>
                    <label htmlFor='selectLevel' className='sr-only'>Status connected by default</label>
                    <div>       
                        <button type='submit' className='btn btn-success btn-lg ms-3' style={{display:'blocks'}}>Add</button>
                    </div>
                </div>
            </form>
        </div>
    );
};


ContactForm.propTypes = {
    add: PropTypes.func.isRequired
};


export default ContactForm;
