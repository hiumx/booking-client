
import React from 'react'
import "./_contact.scss";
import ContactItem from './components/ContactItem';

const Contact = ({contacts = []}) => {
    return (
        <div className='contact__wrapper'>
            {contacts?.map((contact, idx) => (
                <ContactItem key={idx} title={contact.title} items={contact.items} />
            ))}
        </div>
    )
}

export default Contact
