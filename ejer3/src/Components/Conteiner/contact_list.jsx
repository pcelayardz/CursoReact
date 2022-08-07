import React,{useState} from 'react';
import { Contact } from '../../models/contact.class';
import ContactComponent from '../Pure/contact';
import ContactForm from '../Pure/Form/contactForm';

const ContactList = () => {

    const defaultContact1 = new Contact('Perla','perla@gmail.com','12345678',false);
    const defaultContact2 = new Contact('Raul','raul@gmail.com','12345678',true);
    const defaultContact3 = new Contact('Iabel','isabel@gmail.com','12345678',false);

    const [contacts, setContacts] = useState([defaultContact1,defaultContact2,defaultContact3]);

    function statusConnected(contact){
        console.log('Status: ',contact);
        const index = contacts.indexOf(contact);
        const tempContact = [...contacts];
        tempContact[index].status =!tempContact[index].status;
        setContacts(tempContact);
    }

    function deleteContact(contact){
        console.log('Detele this Contact:', contact);
        const index = contacts.indexOf(contact);
        const tempContact = [...contacts];
        tempContact.splice(index,1);
        setContacts(tempContact);
    }

    function addContact(contact){
        const tempContact = [...contacts];
        tempContact.push(contact);
        setContacts(tempContact);
    }


    return (
        <div className='card' >
            <div className='card-header p-2' style={{color:'purple'}}>
                <h3> Contacts list</h3>
            </div>
            <div className='card-body overflow-auto' data-mdb-perfect-scrollbar='true' style={{ position: 'relative', height: '200px'}}>
                <table>
                    <thead>
                        <tr>
                            <th scope='col'>Name</th>
                            <th scope='col'>Email</th>
                            <th scope='col'>Number</th>
                            <th scope='col'>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {contacts.map((contact,index) =>{
                            return(
                                <ContactComponent 
                                    key={index} 
                                    contact={contact} 
                                    status={statusConnected}
                                    remove={deleteContact}>
                                </ContactComponent>
                            )
                        }
                        )}
                    </tbody>
                </table>
            </div>
            <ContactForm add={addContact}></ContactForm>
        </div>
    );
}

export default ContactList;
