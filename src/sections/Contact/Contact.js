import React from 'react'

import ContactCard from './ContactCard'
import { contactsData } from '../../data/contact'

import './Contact.css'

const Contact = () => {
  
  return (
    <div className='contact' id="Contact">
      <div className='contact__container'>
        <h1 className='ps__header'>Contact us</h1>

        <div  className='contact__cards'>
          {contactsData.map((contact) => (
            <ContactCard  
              key={contact.id}
              name={contact.name}
              designation={contact.designation}
              image={contact.image}
              phone={contact.phone}
              email={contact.email}
              linkedIn={contact.linkedIn}
            />
          ))}
        </div>
      </div> 
    </div>
  )
}

export default Contact