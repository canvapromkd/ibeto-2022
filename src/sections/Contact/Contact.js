import React from 'react'
import Aos from 'aos'
import ContactCard from './ContactCard'
import { contactsData } from '../../data/contact'

import './Contact.css'
import { useEffect } from 'react'

const Contact = () => {
  
  return (
    <div className='contact'>
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